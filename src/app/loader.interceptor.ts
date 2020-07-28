import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators'


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderservice: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderservice.show();
    return next.handle(request).pipe(finalize(() => {

      
    }));
  }
}
