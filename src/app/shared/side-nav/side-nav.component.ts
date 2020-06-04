import { Component, OnInit } from '@angular/core';
import { faCogs, faSignOutAlt , faHome, faExchangeAlt, faTable, faAngleDoubleRight, faAngleDoubleLeft,
  faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public collapsed = false;
  faCogs = faCogs;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faHome = faHome;
  faExchangeAlt = faExchangeAlt;
  faTable = faTable;
  faAngleDoubleRight = faAngleDoubleRight;
  faAngleDoubleLeft = faAngleDoubleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
