import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule,MatInputModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

import {Ng2ScrollimateModule} from 'ng2-scrollimate';


import { StackedComponent } from './stacked/stacked.component';
import { BulletsComponent } from './bullets/bullets.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    Ng2ScrollimateModule
  ],
  declarations: [StackedComponent, BulletsComponent, FormComponent],
  exports:[StackedComponent, BulletsComponent, FormComponent]
})
export class CardsModule { 

}
