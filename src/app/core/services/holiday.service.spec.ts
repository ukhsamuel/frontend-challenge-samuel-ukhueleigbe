import { TestBed } from '@angular/core/testing';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';

import { HolidayService } from './holiday.service';
import {mockData} from './countries-mock'
import { Holiday, HolidayPayload } from '../models/holiday';

describe('HolidayService', () => {

  let service: HolidayService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [ 
        HolidayService, 
        { provide: 'url', 
          useValue: 'apiurl'
        }],
       imports: [HttpClientTestingModule]
     });
     service = TestBed.inject(HolidayService);
     httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => { 
    httpTestingController.verify(); 
   }); 

   it('getAll should make a GET HTTP request and return all data items', () => {
     let payload: HolidayPayload = {
      country_code: 'BR',
      year: 2022
     }

    service.getHolidays$(payload).subscribe(res => {
      expect(res).toEqual(mockData); 
      expect(res.length).toBe(2); 
     }); 
     
    const req = httpTestingController.expectOne('apiUrl');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    // req.flush(mockData);
    httpTestingController.verify();

   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
