import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  constructor() { }
  stream:string;
  streams:string[]=['science','commerce','arts'];
  scienceoopt:string[]=['Enginnering',"upsc"];
  opt1:string;
  

  myForm:FormGroup;

  changeCombo(event){

    console.log("combo",event && event.value)
  }
  submit(){

    console.log("submit called..")
    console.log(this.myForm.value)
  }
  ngOnInit(): void {

    console.log("stream",this.stream)
    this.myForm = new FormGroup(
      {
        neet:new FormControl(''),
        commper:new FormControl(''),
        artsper:new FormControl('')
      }
    )
  }
  

}
