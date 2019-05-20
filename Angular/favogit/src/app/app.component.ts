import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(
      private router: Router
    ) {
  }

  search(name: string): void {
    this.router.navigate(['users/search', { login: name }])
  }

  toggleFavourites() {
    this.router.navigateByUrl('/users/favourites');
  }

  submit(): void {
  }
}
