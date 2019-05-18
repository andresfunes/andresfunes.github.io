import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from './services/github.service';
import { FavouriteService } from './services/favourite.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
      private router: Router,
      private favouriteService: FavouriteService
    ) {
  }

  search(name: string): void {
    this.router.navigateByUrl(`/users/search/${name}`);
  }

  toggleFavourites() {
    this.router.navigateByUrl('/users/favourites');
  }

  submit(): void {
  }
}
