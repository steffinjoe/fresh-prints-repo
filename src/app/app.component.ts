import { Component } from '@angular/core';
import { NAV_ITEMS } from 'src/constants/navitems.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fresh-prints-repo';
  navItems = NAV_ITEMS
}
