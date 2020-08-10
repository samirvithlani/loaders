import { Component, OnInit, Input, OnChanges, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit,OnChanges,OnDestroy,AfterContentInit,AfterViewInit {

  @Input() MyValue:any;
  
  ngAfterViewInit(){

    console.log("view after init...")
  }
  ngAfterContentInit(){

    console.log("after content ini....")
  }
  ngOnDestroy(){

    console.log("destroy called...")
  }
  ngOnChanges(){

    console.log("called....")
  }
  constructor(private routes:ActivatedRoute) { }

  
  ngOnInit(): void {

    console.log(this.routes)
    this.MyValue =this.routes.snapshot.queryParams.MyValue;
    console.log("mmm",this.routes.snapshot.queryParams.MyValue)
  }

}
