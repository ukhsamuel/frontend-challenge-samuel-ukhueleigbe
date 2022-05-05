import { Component, Input, OnInit } from '@angular/core';
import { Holiday } from '../../core/models/holiday';

@Component({
  selector: 'holiday-item',
  templateUrl: './holiday-item.component.html',
  styleUrls: ['./holiday-item.component.scss'],
})
export class HolidayItemComponent implements OnInit {

  @Input()
  holiday: Holiday;

  constructor() { }

  ngOnInit() {}

}
