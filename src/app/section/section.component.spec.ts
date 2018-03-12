import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule} from '@angular/material'


import { SectionComponent } from './section.component';
import { CardComponent } from '../card/card.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent,CardComponent ],
      imports:[MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.section={};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
