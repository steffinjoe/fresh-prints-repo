import { Component, Input, OnInit } from '@angular/core';
import { GitUser } from 'src/models/gituser.model';

@Component({
  selector: 'app-search-results-card',
  templateUrl: './search-results-card.component.html',
  styleUrls: ['./search-results-card.component.scss']
})
export class SearchResultsCardComponent implements OnInit {
  constructor() { }
  @Input() user: GitUser | undefined;
  
  ngOnInit(): void {
  }

}
