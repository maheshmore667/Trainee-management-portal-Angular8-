import { Injectable, wtfStartTimeRange } from '@angular/core';
import { trainee } from './trainee';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpCRUDService {

  constructor(private t: ToastrService, private r: Router) {

  }

  traineeArray: trainee[] = [
    {
      "id": 1,
      "name": "Shreyash",
      "lastName": "Gharod",
      "email": "shreyashgharod@mail.com",
      "phone": "9123456789"
    },
    {
      "id": 2,
      "name": "B",
      "lastName": "b",
      "email": "Bb@mail.com",
      "phone": "9122256789"
    },
    {
      "id": 3,
      "name": "C",
      "lastName": "c",
      "email": "Cc@mail.c",
      "phone": "9123456989"
    },
    {
      "id": 4,
      "name": "D",
      "lastName": "d",
      "email": "Dd@mail.com",
      "phone": "9999999999"
    },
    {
      "id": 5,
      "name": "E",
      "lastName": "e",
      "email": "Ee@mail.com",
      "phone": "9876543210"
    }
  ];

  initLS() {
    var num = Math.floor((10000 * Math.random()) % 1000);
    localStorage.setItem("count", num.toString());
    localStorage.setItem("array", JSON.stringify(this.traineeArray));
  }

  setSingle(obj: trainee) {
    localStorage.setItem("singleEmp", JSON.stringify(obj));
  }
  getSingle() {
    var obj: trainee = JSON.parse(localStorage.getItem("singleEmp"));
    return obj;
  }

  addT(newobj) {
    this.traineeArray.push(newobj);
    localStorage.setItem("array", JSON.stringify(this.traineeArray));
  }

  delT(delobj) {
    localStorage.removeItem("array");
    this.traineeArray = this.traineeArray.filter(function (a) {
      return a.id != delobj.id;
    }
    )
    localStorage.setItem("array", JSON.stringify(this.traineeArray));
    return this.traineeArray;
  }

  modify(newobj1, modobj) {
    if (modobj.email == newobj1.email) {
      this.r.navigate[('update')];
      this.t.error('Error','Not Modified. Change Email and try again...');
    }
    else {
      this.traineeArray = this.traineeArray.filter(function (a) {
        return a.email != modobj.email;
      });
      // this.t.success("Modified");
      this.t.success('Success', 'Successfully Updated The Details');
      this.addT(newobj1);
      this.r.navigate(['/']);
    }
  }

}
