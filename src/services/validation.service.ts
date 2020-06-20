import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  emailValidate(control){
        if(control.value.match('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')){
           return null;
        }
        else{
          return {'invalidemail':true};
        }
  }

  phoneValidate(control){
    if(control.value.toString().match('^[7-9]{1}[0-9]{9}$')){
      return null;
    }
    else{
      return {'invalidphone':true};
    }
  }
}

