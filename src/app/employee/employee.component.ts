import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:DataService) { }

  employee:Array<any>=[];

  check(){
    console.log('button')
    throw new Error('not found..')
  }
  ngOnInit(): void {

    this.service.viewEmployee().subscribe(res=>{

      this.employee = res;

    })
   
  }

}
