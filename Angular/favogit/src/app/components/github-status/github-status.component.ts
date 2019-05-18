import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-status',
  templateUrl: './github-status.component.html',
  styleUrls: ['./github-status.component.css']
})
export class GithubStatusComponent implements OnInit {
  githubStatus: string;
  githubColor: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getServiceStatus().subscribe(github => {
      this.githubStatus = github.status.description;
      if (this.githubStatus === "All Systems Operational") {
          this.githubColor = "#28a745";
      }
      else if (this.githubStatus.startsWith("Partial")) {
          this.githubColor = "#dbab09";
      }
      else { //"Major Service Outage"
          this.githubColor = "#dd0000";
      }
    });
  }
}
