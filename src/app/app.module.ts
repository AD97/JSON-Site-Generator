import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { ModuleOptions, NgStaticSiteGeneratorModule } from 'ng-static-site-generator';
const ngStaticSiteGeneratorModuleOptions: ModuleOptions = {
  openExternalLinksInNewTab: false // Automatically add target="_blank" to external links. Default false.
};

import {Ng2ScrollimateModule} from 'ng2-scrollimate';

import * as _ from "lodash";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes,ActivatedRouteSnapshot} from '@angular/router';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import {CarouselComponent} from './carousel/carousel.component';

import {CardsModule} from './cards/cards.module';

const appRoutes:Routes=[
  {
    path: ':page_id',
    component:PageComponent
  },
  {
    path: '',
    component:PageComponent,
    pathMatch:'full',
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    PageComponent,
    SectionComponent,
    CarouselComponent,
  ],
  imports: [
    CardsModule,
    BrowserModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    Ng2ScrollimateModule,
    NgStaticSiteGeneratorModule.forRoot(ngStaticSiteGeneratorModuleOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}  

