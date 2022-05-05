import { Component, OnInit } from '@angular/core';

import { HolidayService } from '../../../core/services/holiday.service';
import { CountriesService } from '../../../core/services/countries.service';
import { Observable } from 'rxjs';
import { Country, Holiday } from '../../../core/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  country: Country;
  holidays$: Observable<Holiday[]>;

  constructor(
    private countriesService$: CountriesService,
    private holidayService$: HolidayService,
    ) {}

  ngOnInit() {
    this.getSelectedCountry();
  }

  getSelectedCountry() {
    this.countriesService$
      .country$
      .pipe()
      .subscribe((country) => {
        this.country = country;

        let payload = {
          country_code: country.code,
          year: 2022
        }

        this.holidays$ =  this.holidayService$.getHolidays$(payload);
      });
      
  }
}
