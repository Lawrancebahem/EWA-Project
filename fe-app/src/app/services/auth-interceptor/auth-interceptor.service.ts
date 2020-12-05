import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionService} from "../sessionService/session.service";
import {Router} from "express";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";

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
      console.log("Token is not valid, asking to refresh")
      let expiredToken = token;
      let response = this.httpClient.get(`${environment.apiUrl}/token-refresh`).pipe(shareReplay(1));
      response.subscribe((response)=>{
        console.log("The new token is: " + response)
      },error => {
        console.log(error.error.message)
      })
      return next.handle(req);
    }
  }
}

