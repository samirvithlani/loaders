import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {

  @Input() MyValue ="sam";
  
  ngAfterContentChecked(){

    console.log("after content checked..")
  }
  ngAfterContentInit(){


    console.log("after content init...")
  }
  ngDoCheck(){


    console.log("do check....")
  }

  constructor() { 

    console.log("constructor...")
    
  }
  ngOnChanges(changes:SimpleChanges){

    console.log("abcd...")
    console.log(changes)
  }

  ngOnInit(): void {

    console.log("init...")
  }

}
