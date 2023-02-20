import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchWeatherService } from 'src/app/shared/fetch-weather.service';
import { WeatherResponse } from 'src/app/shared/shared.interface.ts/interface.Interface';
import { Position, PositionError } from './Interfaces/Position.Interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  img!: string;
  public weatherResponse!: WeatherResponse;

  constructor(
    private fetch: FetchWeatherService,
    private actr: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getLocation();
  }

  fetchWeather(event: any) {
    if (event.code == 'Enter') {
      this.getWeatherByCityName(event.target.value);
    }
  }

  private getLocation() {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            this.getWeatherByLatAndLOng(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error: PositionError) => console.log(error)
        );
      } else {
        this.getWeatherByCityName('Delhi');
      }
    });
  }

  private getWeatherByCityName(city: string) {
    this.fetch.fetchDataByCityName(city).subscribe((data: WeatherResponse) => {
      this.weatherResponse = data;
      this.img = `./../../../assets/${this.weatherResponse.weather[0].main}.png`;
    });
  }

  private getWeatherByLatAndLOng(latitude: number, longitude: number) {
    this.fetch
      .fetchData(latitude, longitude)
      .subscribe((data: WeatherResponse) => {
        this.weatherResponse = data;
        this.img = `./../../../assets/${this.weatherResponse.weather[0].main}.png`;
      });
  }
}
