import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            const userToken: string = 'Bearer ' + environment.apiKey;
            request.headers.set('Authorization',userToken)
            request = request.clone({
                setHeaders: { 
                    Authorization: `${userToken}`,
                }
            });        

        return next.handle(request);
    }
}