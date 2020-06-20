import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {trigger, state, animate, style, transition} from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService implements CanActivate{
  apiURL: string;

  constructor(private route:Router, private t:ToastrService) { 
    this.apiURL = "http://localhost/saNG4-Demo-App/api/";
  }
  canActivate():boolean {
    if(localStorage.getItem("userData")) {
      return true;
    }
    else {
      this.route.navigate(['/login']);
      return false;
    }
  }

  adminEmail = "admin@mail.com";
  adminPass = "admin";

  authenticateUser(email,pass) {
    if(email.localeCompare(this.adminEmail)){
      alert("Wrong Email");
      return false;
    }
    else if(pass.localeCompare(this.adminPass)){
      alert("Wrong Password");
      return false;
    }
    else{
      localStorage.setItem("userData",email);
      this.t.success("Success","Successfully Logged-In");
      return true;
    }
  }

  logOutUser() {
    localStorage.removeItem("singleEmp");
    localStorage.removeItem("array");
    localStorage.removeItem("userData");
    localStorage.removeItem("data");
    localStorage.removeItem("count");
    this.t.warning("Sucess","Logout Successful");
  }

}

export function routerTransition() {
	return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({transform: 'translateX(100%)', position:'absolute', width:'80%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),

    transition(':leave', [
      style({transform: 'translateX(0%)', position:'fixed', width:'20%'}),
      animate('0s ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ]);

}

