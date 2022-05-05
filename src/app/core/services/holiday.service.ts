import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Holiday, HolidayPayload } from '../models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  BASE_URL = environment.apiUrl;

  constructor(
    private httpc:HttpClient
  ) { }

  /**
     * get Countries
     *
     * @return countries[]
     */

	 getHolidays$(holidayPayload: HolidayPayload):Observable<Holiday[]>{
      const url = `${this.BASE_URL}/holidays/List`;
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
      
    return this.httpc.post<Holiday[]>(url,holidayPayload);
  }

}

