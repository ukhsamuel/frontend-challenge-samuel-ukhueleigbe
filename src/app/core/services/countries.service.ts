import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpc: HttpClient) {}

  BASE_URL = environment.apiUrl;
  private countrySource = new BehaviorSubject<Country>(null);
  country$ = this.countrySource.asObservable();

  /**
   * get Countries
   *
   * @return countries[]
   */

  getCountries$(): Observable<Country[]> {
    const url = `${this.BASE_URL}/holidays/Countries`;
    return this.httpc.get<Country[]>(url);
  }

  updateCountry$(country: Country) {
    this.countrySource.next(country);
  }
}
