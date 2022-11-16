import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any[], string: string):any {
      if(!value || !string){
        return value
      }
      else{
      return value.filter((res:any)=>{
         return JSON.stringify(res.firstName.toLowerCase()).includes(string.toLowerCase())
        })
      }
  }
}
