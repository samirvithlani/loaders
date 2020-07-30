import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { RetryComponent } from './retry/retry.component';


const routes: Routes = [
  {path:'emp',component:EmployeeComponent},
  {path:'error',component:ErrorComponent},
  {path:'retry',component:RetryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
