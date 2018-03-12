import { ViewChild,Component, OnInit,NgZone } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {MatMenuTrigger} from '@angular/material';
import * as _ from "lodash";

declare var require:any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isShrunk: boolean = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  
    someMethod() {
      this.trigger.openMenu();
    }

  data:any = require('../../assets/structure.json');
  links:any=[];
  logo_src="../../../../assets/images/angularicon.png";
  clicked:boolean;
  constructor(private router:Router,private route:ActivatedRoute,zone:NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrunk = true;
        } else {
             this.isShrunk = false;
        }
      });
    }
 
  }

  ngOnInit() {
    this.links=this.data.pages;
  }

  page(link){
    console.log(link);
    this.router.navigate([link.path]);
  }


 
}
