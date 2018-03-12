import { Input,Component,OnInit,ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Routes,Router} from '@angular/router';

import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  title = 'toolbar';
  direction = 'row';
  chk="footer";
  @Input()
  link:any;
  constructor( private router:Router){}
}
