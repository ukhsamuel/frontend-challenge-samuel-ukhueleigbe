import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../core/models/country';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {

  @Input()
  country: Country;

  @Input()
  bgClass: number;

  constructor() { }

  ngOnInit() {}

}
