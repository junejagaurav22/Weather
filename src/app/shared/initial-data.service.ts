import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { FetchWeatherService } from './fetch-weather.service';
import { WeatherResponse } from './shared.interface.ts/interface.Interface';

@Injectable({
  providedIn: 'root',
})
export class InitialDataService implements Resolve<WeatherResponse> {
  constructor(private fetch: FetchWeatherService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<WeatherResponse>{
    return this.fetch.fetchDataByCityName('Delhi');
  }
}
