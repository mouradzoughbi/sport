import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'astrix'
})
export class AstrixPipe implements PipeTransform {

  transform(ch:string): string {
    let result="";
    let v=["a","e","i","o","u","y"]
    for (let i = 0; i < ch.length; i++) {
      let alt=ch[i];
      for (let j = 0; j < v.length; j++) {
        if (ch[i].toLowerCase()==v[j]) {
          alt="*";
          break;
        }
        
        
      }
      
      
    result=result+alt;
    }
    return result;
  }

}
