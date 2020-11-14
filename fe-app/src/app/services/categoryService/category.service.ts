import { Injectable } from '@angular/core';
import * as categories from  '../../json/categories.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryArray: any = (categories as any).default

  constructor() { }

  findAll(){
    return this.categoryArray
  }

  findyById(categoryId){
    return this.categoryArray.filter(x => x.id == categoryId)[0];
  }

}
