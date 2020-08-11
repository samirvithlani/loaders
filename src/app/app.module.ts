import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import { GlobleErrorHandlerService } from './globle-error-handler.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader.interceptor';
import { RetryComponent } from './retry/retry.component';
import { MyDirectiverDirective } from './my-directiver.directive';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './aboutus/app2/app2.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule, matFormFieldAnimations, MatFormField} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
  import { from } from 'rxjs';
import { DebounceComponent } from './debounce/debounce.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ErrorComponent,
    LoaderComponent,
    RetryComponent,
    MyDirectiverDirective,
    MenuComponent,
    AboutusComponent,
    App1Component,
    App2Component,
    FormsDemoComponent,
    DebounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingBarRouterModule,
    LoadingBarModule
    

  ],
  providers: [
    LoaderService, {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {

      provide: ErrorHandler, useClass: GlobleErrorHandlerService

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
