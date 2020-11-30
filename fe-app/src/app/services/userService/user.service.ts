import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
// @ts-ignore
import {Interest} from "../../models/Interest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[];

  constructor(private httpClient:HttpClient) {
    this.users = [];
  }


  /**
   * To save or update a user
   * @param user
   */
  public saveOrUpdate(user:User):Observable<any>{
    return this.httpClient.post<User>(`${environment.apiUrl}/user`, user).pipe(shareReplay(1));
  }

  /**
   * To insert user's ineterests
   * @param interests
   * @param userId
   */
  public insertUserInterests(interests:Interest[], userId):Observable<any>{
    return this.httpClient.post<User>(`${environment.apiUrl}/user/interests/`+ userId, interests).pipe(shareReplay(1));
  }

  /**
   * To get all users
   */
  public findAll():User[]{
    return this.users;
  }

  /**
   * To get the user's interests
   * @param userId
   */
  public getUserInterests(userId):Observable<number[]>{
    return this.httpClient.get<number[]>(`${environment.apiUrl}/user/interests/`+ userId).pipe(shareReplay(1));

  }

  /**
   * To find a user by an id
   * @param id
   */
  public findById(id){
    return this.httpClient.get<User>(`${environment.apiUrl}/user/`+id).pipe((shareReplay(1)));
  }

  /**
   * To delete a user by an id
   * @param id
   */
  public deleteById(id){
    return this.httpClient.delete(`${environment.apiUrl}/user/`+id).pipe(shareReplay(1));
  }
}
