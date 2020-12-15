import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
//private api='https://mailthis.to/listopiaeoi@gmail.com'
//private api='listopiacontact@listopia-297523.iam.gserviceaccount.com'
//private api='https://mailthis.to/antoniomanuelmancerahevilla@gmail.com'
private api='https://mailthis.to/antoniomancera'
  constructor(private http:HttpClient) { }
  PostMessage(input:any){
   return this.http.post(this.api,input, {responseType: 'text'}).pipe(
     map(
       (response)=>{
         if(response){
         return response;
       }
      },
      (error:any)=>{
        return error;
      }
     )
   )

  }
}
