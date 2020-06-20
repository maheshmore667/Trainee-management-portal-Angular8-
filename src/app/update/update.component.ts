import { Component, OnInit } from '@angular/core';
import { trainee } from '../../services/trainee';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//service
import {EmpCRUDService} from '../../services/emp-crud.service'
import { routerTransition } from '../../services/authenticate.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  // animations: [routerTransition()],
	// host: {'[@routerTransition]': ''}
})
export class UpdateComponent implements OnInit {

  public modobj:any;
  private newobj:any;
  userForm:FormGroup;
  private Name:string;
  private LName:string;
  private Phone:number;
  private Email:string;
  ID: number;

  constructor(private es:EmpCRUDService, private vs:ValidationService) { 

    this.userForm=new FormGroup({
      namefc:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[a-zA-Z ]+$")]),
      lnamefc:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[a-zA-Z ]+$")]),
      phonefc:new FormControl('',[Validators.required,vs.phoneValidate]),
      emailfc:new FormControl('',[Validators.required,vs.emailValidate])
  });

  this.modobj=JSON.parse(localStorage.getItem('data'));
  this.ID=this.modobj.id;
  this.Name=this.modobj.name;
  this.LName=this.modobj.lastName;
  this.Phone=this.modobj.phone;
  this.Email=this.modobj.email;
  }

  public emps:trainee[];

  ngOnInit() {
  }
  updateclick()
  {
    this.newobj={id:this.ID,name:this.Name,lastName:this.LName,email:this.Email,phone:this.Phone};
    //this.modobj=JSON.parse(localStorage.getItem('data'));
    this.es.modify(this.newobj,this.modobj);
    //localStorage.setItem('updatedarr',JSON.stringify(this.emps));
  }

}

