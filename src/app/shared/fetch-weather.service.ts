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

  fetchData(lat: number, lon: number): Observable<WeatherResponse> {
    const url =
      config.endpoint.bffBaseUrl +
      `lat=${lat}&lon=${lon}&appid=16eb548a98aee0b1486ac767ebf022a0&&units=metric`;
    return this.http.get<any>(url);
  }

  fetchDataByCityName(city: string): Observable<WeatherResponse> {
    const url =
      config.endpoint.bffBaseUrl +
      `q=${city}&appid=16eb548a98aee0b1486ac767ebf022a0&&units=metric`;
    return this.http.get<any>(url);
  }
}
