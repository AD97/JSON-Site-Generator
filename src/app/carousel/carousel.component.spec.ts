import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarCardComponent } from '../car-card/car-card.component';
import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule} from '@angular/material'



describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent,CarCardComponent ],
      imports:[Ng2CarouselamosModule,MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
