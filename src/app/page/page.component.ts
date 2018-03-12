import { Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

import * as _ from 'lodash';

import { SectionComponent } from '../section/section.component';

declare var require: any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  data: any = require('../../assets/structure.json');
  page: any;

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe((pageId) => this.getdata(pageId));
  }

  getdata(pageId) {
    let index:any;
    window.scrollTo(0,0);
    var users = this.data.pages;
    index = _.findIndex(users, ['page_id', this.id]);
    console.log(index, this.id, users);
    this.page = this.data.pages[index].page;
    return this.page;
  }

  public get id() {
    if (this.route.snapshot.params.page_id === undefined)
      return 'profile';
    return this.route.snapshot.params.page_id;

  }
}
