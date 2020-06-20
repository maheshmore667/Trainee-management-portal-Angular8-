import { Component, OnInit } from '@angular/core';
import { EmpCRUDService } from '../../services/emp-crud.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//services
import { routerTransition } from '../../services/authenticate.service';
import { ValidationService } from '../../services/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
    // animations: [routerTransition()],
    // host: {'[@routerTransition]': ''}
})
export class EmployeesComponent implements OnInit {

  private Name : string;
  private LName : string;  
  private Phone : number;
  private Email : string;
  private newobj:any;
  private std:any[];
  userForm:FormGroup;

  constructor(private crud:EmpCRUDService,private t:ToastrService, private vs:ValidationService, private r:Router){
    this.userForm=new FormGroup({
      namefc:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[a-zA-Z ]+$")]),
      lnamefc:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[a-zA-Z ]+$")]),
      phonefc:new FormControl('',[Validators.required,vs.phoneValidate]),
      emailfc:new FormControl('',[Validators.required,vs.emailValidate])
  });
 // this.userForm.setErrors({ 'invalid': true });
// this.userForm.controls['n1'].setErrors({'incorrect': true});
}

  ngOnInit() {

  }

  submitclick(){

   // console.log(this.userForm.value);
    this.Name=this.userForm.value.namefc;
    this.LName=this.userForm.value.lnamefc;
    this.Phone=this.userForm.value.phonefc;
    this.Email=this.userForm.value.emailfc;
    
     var nid = +localStorage.getItem("count");
     localStorage.removeItem("count");
     this.newobj={id:nid++,name:this.Name,lastName:this.LName,email:this.Email,phone:this.Phone};
     nid = Math.floor((10000*Math.random())%1000);
     localStorage.setItem("count",nid.toString());
     this.crud.addT(this.newobj);
     this.t.success("Success","Trainee Details Added Successfully");
     this.r.navigate(['/']);
  }

}


