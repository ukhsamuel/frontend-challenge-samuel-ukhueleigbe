import { TestBed } from '@angular/core/testing';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';

import { CountriesService } from './countries.service';
import {mockData} from './countries-mock'

describe('CountryService', () => {
  let service: CountriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [ 
        CountriesService, 
        { provide: 'url', 
          useValue: 'apiurl'
        }],
       imports: [HttpClientTestingModule]
     });
     service = TestBed.inject(CountriesService);
     httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => { 
    httpTestingController.verify(); 
   }); 

   it('getAll should make a GET HTTP request and return all data items', () => {
    service.getCountries$().subscribe(res => {
      expect(res).toEqual(mockData); 
      expect(res.length).toBe(2); 
     }); 
     
    const req = httpTestingController.expectOne('apiUrl');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(mockData);
    httpTestingController.verify();

   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
