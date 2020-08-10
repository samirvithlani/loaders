import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  app2comp:boolean =true;
  constructor(private route:ActivatedRoute) { }

  value:string;
  name:string;
  app2exist:boolean =true;

  submitvalue(val)
  {

    this.value = val.value;
    console.log("submit calle...")
    console.log(this.value)
  }
  destroy(){

    this.app2comp = false;  
  }
  ngOnInit(): void {
    

  }
}
