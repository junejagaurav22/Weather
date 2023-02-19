import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchWeatherService } from './fetch-weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [FetchWeatherService],
})
export class SharedModule {}
