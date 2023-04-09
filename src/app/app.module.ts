import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgxsModule } from '@ngxs/store';
import { CoreState } from './core/store/states';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DashBoardState } from './pages/dashboard/store/states';
import { SwiperModule } from 'swiper/angular';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SideBarComponent,
    HeaderComponent,
    NgxsModule.forRoot([CoreState, DashBoardState]),
    DashboardComponent,
    SwiperModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
