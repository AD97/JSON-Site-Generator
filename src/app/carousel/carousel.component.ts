import { Input,Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';

declare var require:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input()
  items:any=[];
  images:any=[];
   
  constructor() {}

  ngOnInit(){}

  

}
