import { Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule, Routes } from '@angular/router';
declare var require: any;


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  data: any = require('../../assets/structure.json');
  cols: any;
  rows;
  @Input()
  section: any;
  constructor() { }

  ngOnInit() {
    this.cols = this.section.no_of_columns;
    this.rows = this.section.no_of_rows;
  }

}
