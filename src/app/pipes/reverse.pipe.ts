import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): string {
    let newch="";
    // for (let i = 0; i < ch.length; i++) {
    //   newch=ch[i]+newch;
    for (let i= ch.length-1; i >=0 ; i--) {
      newch=newch+ch[i]
      
      
    }
    return newch;
      
    }
  }
  

