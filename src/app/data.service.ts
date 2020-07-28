import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewEmployee():Observable<any>{

    return this.http.get('http://localhost:8080/employee/viewEmployee');
    
  }

  constructor(private http:HttpClient) { }
}
