import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { RetryComponent } from './retry/retry.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './aboutus/app2/app2.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';


const routes: Routes = [
  {path:'emp',component:EmployeeComponent},
  {path:'error',component:ErrorComponent},
  {path:'retry',component:RetryComponent},
  {path:'forms',component:FormsDemoComponent},
  {path:'aboutus',component:AboutusComponent,children:[
    {path:'app1',component:App1Component},
    {path:'app2',component:App2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
