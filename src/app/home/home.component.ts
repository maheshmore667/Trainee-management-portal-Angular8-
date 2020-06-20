import { Component, OnInit } from '@angular/core';
import { trainee } from 'src/services/trainee';
import { Router } from '@angular/router';
 // Services
import {ToastrModule, ToastrService } from 'ngx-toastr';
import { EmpCRUDService } from '../../services/emp-crud.service';
import { routerTransition } from '../../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  
  private nameSearch:string="";
  private flag:boolean=false;
  
  constructor(private es:EmpCRUDService, private r: Router, private t:ToastrService) {
     }

  ngOnInit() {
  }

   public emps:trainee[]=this.es.traineeArray;
//update emplyee data
   updateRecord(delobj){
    localStorage.setItem('data',JSON.stringify(delobj));
    this.r.navigate(['/update']);
  // this.emps=JSON.parse(localStorage.getItem('updatedarr'))

}

//delete emplyee data
deleteRecord(delobj){

  if(confirm("Are you sure you want to Delete this record?")){
  this.t.success("Success","Trainee Record Deleted Successfully!");
  this.emps=this.es.delT(delobj);
  }
  else{
    this.t.error("Error","Record Not Deleted. Sorry For Inconvinience...");
    this.r.navigate(['']);
  }
  if(this.emps.length==0){
    this.flag=true;
  }
}


  displayTrain(obj){
    this.es.setSingle(obj);
    this.r.navigate(["/single"]);
  }

}
