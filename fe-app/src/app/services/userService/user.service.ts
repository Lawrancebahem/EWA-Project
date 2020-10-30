import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subscription:Subscription;
  private users:User[];

  constructor(private httpClient:HttpClient) {
    this.users = [];
  }


  public saveOrUpdate(user:User):Observable<any>{
    return this.httpClient.post<User>(`${environment.apiUrl}/user`, user).pipe(shareReplay(1));
  }

  public findAll():User[]{
    return this.users;
  }

  public findById(id){
    return this.httpClient.get<User>(`${environment.apiUrl}/user/`+id).pipe((shareReplay(1)));
  }

  public deleteById(id){
    return this.httpClient.delete(`${environment.apiUrl}/user/`+id).pipe(shareReplay(1));
  }
}
