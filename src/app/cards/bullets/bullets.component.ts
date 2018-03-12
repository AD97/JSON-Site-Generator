import { Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.scss']
})
export class BulletsComponent implements OnInit {
  @Input()
  card: any;
  constructor() { }

  ngOnInit() {
  }

}
