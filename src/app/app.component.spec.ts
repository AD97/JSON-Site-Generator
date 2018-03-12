import {TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';

import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule} from '@angular/material'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent
      ],
      imports:[RouterTestingModule,MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule
      
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  
});
