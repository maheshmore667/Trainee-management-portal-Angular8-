import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
//service
import { AuthenticateService, routerTransition } from '../../services/authenticate.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // animations: [routerTransition()],
	// host: {'[@routerTransition]': ''}
})
export class SidebarComponent implements OnInit {

  constructor(private au: AuthenticateService, private r: Router) { }

  ngOnInit() {
  }

   	// Logout User

  logout(){
    this.au.logOutUser();
    this.r.navigate(["/login"]);
  }

}
