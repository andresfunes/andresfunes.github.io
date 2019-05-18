import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { GithubService } from '../../services/github.service';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    let login: string = this.route.snapshot.paramMap.get('login');
    this.githubService.getUser(login).subscribe(user => {
      this.user = user;
    });
  }

  isFavourite(): boolean {
    if (this.user) {
      return this.favouriteService.isFavourite(this.user.id);
    }
    return false;
  }

  addToFav(): void {
    this.favouriteService.add(this.user);
  }

  removeFromFav(): void {
    this.favouriteService.remove(this.user);
  }
}
