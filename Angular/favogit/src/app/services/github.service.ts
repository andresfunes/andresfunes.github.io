import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../models/user-result';
import { User } from '../models/user';
import { Github } from '../models/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubUrl = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getServiceStatus(): Observable<Github> {
    return this.http.get<Github>("https://kctbh9vrtdwd.statuspage.io/api/v2/status.json");
  }

  searchUsers(name: string): Observable<UserResult> {
    return this.http.get<UserResult>(`${this.githubUrl}/search/users?q=${name}&per_page=20`);
  }

  getUser(login: string) {
    return this.http.get<User>(`${this.githubUrl}/users/${login}`);
  }
}
