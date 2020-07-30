import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewEmployee():Observable<any>{

    return this.http.get('http://localhost:8080/employee/viewEmployee');
    
  }
  viewEmployeeRetry():Observable<any>{

    return this.http.get('http://localhost:8080/employee/viewEmployee').pipe(

  //  retry(10)
      retryWhen(err =>err.pipe(
        delay(4000),
        scan((retryCount)=>{

          if(retryCount>5){
            throw err;
          }
          else{
            retryCount = retryCount +1;
            console.log(retryCount)
            return retryCount
          }
        },0)
      ))
    )
    
  }

  

  constructor(private http:HttpClient) { }
}
