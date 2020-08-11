import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit,AfterViewInit {

  constructor(private ngxLoading:LoadingBarService) { }

  reqData=null;
  @ViewChild("myInput")myInput:ElementRef;
  ngAfterViewInit(){

    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(1000),
      distinctUntilChanged()


    )
    
    searchTerm.subscribe(res=>{

      console.log(res)
      this.reqData =res;
      this.ngxLoading.start();
      setTimeout(() => {
        this.reqData =null;
        this.ngxLoading.stop(); 
      }, 1000);
    })
   
  }
  ngOnInit(): void {
  }

}
