import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favourites: User[] = [];

  constructor(private _store: Store<any>) {
    _store.select('favourites').subscribe(favourites => {
      this.favourites = favourites;
    });
  }

  add(user: User): void {
    if (this.favourites.find(f => f.id === user.id) === undefined) {
      user.is_favourite = true;
      this._store.dispatch({
        type: 'Add',
        payload: user
      });
    }
  }

  remove(user: User): void {
    if (this.favourites.find(f => f.id === user.id) !== undefined) {
      user.is_favourite = false;
      this._store.dispatch({
        type: 'Remove',
        payload: { id: user.id}
      });
    }
  }

  reset(): void {
    this._store.dispatch({
      type: 'Reset',
      payload: {}
    });
  }

  get(): User[] {
    return this.favourites;
  }

  isFavourite(id: number): boolean {
    return this.favourites.find(f => f.id === id) !== undefined;
  }
}
