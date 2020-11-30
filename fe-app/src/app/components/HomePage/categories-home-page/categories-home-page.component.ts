import { Component, OnInit } from '@angular/core';
import * as categories from "../../../json/categories.json";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/categoryService/category.service";

@Component({
  selector: 'app-activities-home-page',
  templateUrl: './categories-home-page.component.html',
  styleUrls: ['./categories-home-page.component.css']
})
export class CategoriesHomePageComponent implements OnInit {
  categoryArray: any = (categories as any).default;
  searchText;
  categorySearch = [];
  filteredCategoryArray = this.categoryArray;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

}
