import { Component, OnInit } from '@angular/core';
import { GitUser } from 'src/models/gituser.model';
import { OctokitService } from '../octokit.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  users: GitUser[] = [];
  constructor(private octokitService: OctokitService) { }

  ngOnInit(): void {
    this.users = this.octokitService.getHistory()
  }

  clearHistory() {
    this.octokitService.clear()
    this.users = []
  }

}
