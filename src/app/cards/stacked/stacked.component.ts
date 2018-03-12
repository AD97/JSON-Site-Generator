import { Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss']
})
export class StackedComponent implements OnInit {
  @Input()
  card: any;
  url;
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    if (this.card.media.type === 'video') {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.card.media.url + this.card.media.id);
      console.log(this.url, "hello url");
      
    }
    console.log(this.card.title);
  }



}

