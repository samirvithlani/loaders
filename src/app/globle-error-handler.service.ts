import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class GlobleErrorHandlerService implements ErrorHandler{

  handleError(error:any){
  //router
  const router = this.injector.get(Router)
  console.log('Request url ${router.url}')

  if(error instanceof HttpResponse){

    console.error('backed problem',error.status)
    
  }
  else{

    console.log('an error accured..',error.message)
  }
    router.navigate(['error'])
  }
  constructor(private injector:Injector) { }
}
