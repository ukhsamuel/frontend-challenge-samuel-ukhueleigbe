import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  countries$: Observable<Country[]>;
  searchTerm = '';

  constructor(
    private countriesService$: CountriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.countries$ = this.countriesService$.getCountries$();
  }

  viewCountry(country: Country) {
    this.countriesService$.updateCountry$(country);
    this.router.navigate(['holidays', 'detail']);
  }
}
