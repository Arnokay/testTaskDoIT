import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./auth.service";
import { HttpModule } from "@angular/http";
import {MarkerService} from "./marker.service";
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBSkvp-n7nNPcgcttIUYouPRJmFSzD1Cs'
    })
  ],
  providers: [
    AuthService,
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
