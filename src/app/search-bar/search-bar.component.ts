import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  userInput: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  searchUser() {
    this.userService.updateData(this.userInput);
  }

}
