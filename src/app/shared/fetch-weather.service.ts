import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../../assets/config.json';
import { WeatherResponse } from './shared.interface.ts/interface.Interface';

@Injectable({
  providedIn: 'root',
})
export class FetchWeatherService {
  constructor(private http: HttpClient) {}

  fetchData(cityName: string): Observable<WeatherResponse> {
    const url =
      config.endpoint.bffBaseUrl +
      `q=${cityName}&appid=16eb548a98aee0b1486ac767ebf022a0`;
    return this.http.get<any>(url);
  }
}
