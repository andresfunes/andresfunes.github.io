import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GithubStatusComponent } from './components/github-status/github-status.component';
import { GithubForkmeComponent } from './components/github-forkme/github-forkme.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { favourites } from './stores/reducer';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GithubStatusComponent,
    GithubForkmeComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    StoreModule.forRoot({ favourites })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
