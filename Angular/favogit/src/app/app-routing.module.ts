import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'users/search', pathMatch: 'full' },
  { path: 'users/search', component: GridComponent },
  { path: 'users/favourites', component: GridComponent },
  { path: 'users/:login', component: ProfileComponent },
  { path: '**', redirectTo: 'users/search'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
