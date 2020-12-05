import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionService} from "../sessionService/session.service";
import {Router} from "express";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {sadOutline} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private session:SessionService,
              private httpClient:HttpClient) { }

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

