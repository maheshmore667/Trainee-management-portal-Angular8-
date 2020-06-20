import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {
  public  a:string="+91";
  transform(value:string, phno:number): string {
   
    return this.a+"  "+ phno.toString();
  }
}
