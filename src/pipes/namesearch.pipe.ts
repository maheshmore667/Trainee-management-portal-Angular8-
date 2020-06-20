import { Pipe, PipeTransform, TRANSLATIONS_FORMAT } from '@angular/core';
import { trainee } from '../services/trainee';
 
@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {
  transform(value: trainee[], name:string): any {
    name = name.toString().toLowerCase();
    return value.filter((element)=>element.name.toLowerCase().includes(name)||element.email.toLowerCase().includes(name)||element.lastName.toLowerCase().includes(name)||element.phone.includes(name));
  }

}