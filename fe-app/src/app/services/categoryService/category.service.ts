import { Injectable } from '@angular/core';
import * as categories from  '../../json/categories.json';
import {Category} from "../../models/category";
import {Observable} from "rxjs";
import {Activity} from "../../models/activity";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  categoryArray: any = (categories as any).default

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.categoryArray
  }

  findyById(categoryId){
    return this.categoryArray.filter(x => x.id == categoryId)[0];
  }

  findByTitle(categoryTitle){
    return this.categoryArray.filter( x => x.categoryTitle == categoryTitle)[0]
  }

  public getAllActivitiesForCategory(idCategory): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/category/activity/all/` + idCategory).pipe(shareReplay(1));
  }

  public getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.apiUrl}/category/all`).pipe(shareReplay(1));
  }

}
