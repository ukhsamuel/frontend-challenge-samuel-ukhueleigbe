import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-loader-dynamic',
  templateUrl: './skeleton-dynamic-grids.component.html',
  styleUrls: ['./skeleton-dynamic-grids.component.scss'],
})
export class DynamicSkeletonGridsComponent implements OnInit {

  @Input()
  rows = 10;

  @Input()
  cols = 2;


  colsArray = [];


  constructor() {}

  ngOnInit() {
  }

}
