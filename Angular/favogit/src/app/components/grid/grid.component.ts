import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from "rxjs";

import { MatTable } from '@angular/material';

import { FavouriteService } from '../../services/favourite.service';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  list: User[];
  total: number;
  order: string = 'Ascending Order';
  columnsNames: string[] = ['avatar_url', 'login', 'name', 'created_at', 'followers', 'public_repos', 'is_favourite']
  @ViewChild('table') table: MatTable<Element>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private githubService: GithubService,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    if (this.isFavouritePage()) {
      this.list = this.favouriteService.get();
      this.total = this.list.length;
    }
    else {
      let login: string = this.route.snapshot.paramMap.get('login');
      this.doSearch(login);
    }
  }

  ngOnChanges(): void {
    this.sort();
  }

  doSearch(login: string): void {
    this.githubService.searchUsers(login).subscribe(userResult => {
      if (userResult.items) {
        forkJoin(userResult.items.map(item => this.githubService.getUser(item.login))).subscribe(users => {
          users.map(user => user.is_favourite = this.favouriteService.isFavourite(user.id));
          this.list = users;
          this.sort();
        });
      }
      this.total = userResult.total_count;
    });
  }

  changeOrder(): void {
    this.order = this.order === 'Ascending Order' ? 'Descending Order' : 'Ascending Order';
    this.sort();
    this.table.renderRows();
  }

  addToFav(user: User): void {
    this.favouriteService.add(user);
  }

  removeFromFav(user: User): void {
    this.favouriteService.remove(user);
    if (this.isFavouritePage()) {
      this.list = this.favouriteService.get();
      this.total = this.list.length;
      this.table.renderRows();
    }
  }

  openProfile(user: User): void {
    this.router.navigateByUrl(`/users/${user.login}`);
  }

  private sort(): void {
    if (this.list) {
      this.list = this.list.sort((a, b) => this.order === 'Ascending Order' ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login));
    }
  }

  private isFavouritePage(): boolean {
    return this.route.snapshot.url.toString() === "users,favourites";
  }
}
