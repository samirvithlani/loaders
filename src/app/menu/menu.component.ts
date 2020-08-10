import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  menuArray:Array<any>=[]
  ngOnInit(): void {
    this.menuArray =[
      {title:'aboutUs',link:'aboutus'},
      {title:'retry',link:'retry'},
      {title:'Forms',link:'forms'},
    ]
  }

}
