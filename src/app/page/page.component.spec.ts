import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsComponent } from './sections.component';
import { SectionComponent } from '../section/section.component';
import {CarouselComponent} from '../carousel/carousel.component';

import {RouterTestingModule} from '@angular/router/testing';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule} from '@angular/material'

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsComponent,SectionComponent,CarouselComponent],
      imports:[
        Ng2CarouselamosModule,
        MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    component.sections={};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
