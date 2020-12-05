import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionService} from "../sessionService/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private session:SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.session.getTokenFromSessionStorage();
    if (token != null){
      const modifiedRequest = req.clone({setHeaders:{Authorization:token}});
      return next.handle(modifiedRequest);
    }else {
      return next.handle(req);
    }
  }
}

