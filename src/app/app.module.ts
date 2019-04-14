import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {VillageDataService} from './services/village-data.service';
import { WeatherComponent } from './components/weather/weather.component';
import { SocialInfoComponent } from './components/social-info/social-info.component';
import { VillageComponent } from './components/village/village.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {CustomHttpInterceptor} from './interseptors/CustomHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    VillageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    VillageDataService,
    { provide: 'BASE_URL', useValue: 'localhost' },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
