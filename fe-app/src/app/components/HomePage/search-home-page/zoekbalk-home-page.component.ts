import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import * as categories from  '../../../json/categories.json'
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/categoryService/category.service";

@Component({
  selector: 'app-zoekbalk-home-page',
  templateUrl: './zoekbalk-home-page.component.html',
  styleUrls: ['./zoekbalk-home-page.component.css']
})


export class ZoekbalkHomePageComponent implements OnInit {
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
