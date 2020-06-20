import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { AuthenticateService, routerTransition } from "../../services/authenticate.service";
import { EmpCRUDService } from '../../services/emp-crud.service';
import { ValidationService } from '../../services/validation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // animations: [routerTransition()],
	// host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;
  //initial field values
  email:string="";
  password:string="";

  constructor(private router: Router, private authService:AuthenticateService, private es:EmpCRUDService,private vs:ValidationService) {
    this.userForm = new FormGroup({
      emailfc:new FormControl('',[Validators.required,this.vs.emailValidate])
  });
   }

  ngOnInit() {
  }

  //login authentication
  validate(){
    this.es.initLS();
    this.authService.authenticateUser(this.email,this.password);
  }


}
