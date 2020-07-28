import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderservice:LoaderService) { }

  color ='primary'
  mode='indeterminate'
  value = 40;
  isLoading:Subject<boolean> = this.loaderservice.isLoading;

  ngOnInit(): void {
  }

}
