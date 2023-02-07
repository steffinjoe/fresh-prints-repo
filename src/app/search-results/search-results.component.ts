import { Component, OnInit } from '@angular/core';
import { GitUser } from 'src/models/gituser.model';
import { OctokitService } from '../octokit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResults: any;
  user: any;
  constructor(private octokitService: OctokitService,
    private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {  
    this.userService.gituser$.subscribe(async (userData) => {
      await this.octokitService.callGitHub(userData);
      this.searchResults = this.octokitService.getResponse()
      this.user = {
        name: this.searchResults?.name,
        avatar_url: this.searchResults?.avatar_url,
        isNoResults: this.searchResults ? false : true
      }
    })
  }

}
