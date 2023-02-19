import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from 'src/app/shared/fetch-weather.service';
import { WeatherResponse } from 'src/app/shared/shared.interface.ts/interface.Interface';
import { Position, PositionError } from './Interfaces/Position.Interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lat!: number;
  lng!: number;
  img!: string;
  public weatherResponse: WeatherResponse = {
    coord: { lon: 75.8694, lat: 30.9211 },
    weather: [
      { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
    ],
    base: 'stations',
    main: {
      temp: 17.7,
      feels_like: 16.62,
      temp_min: 17.7,
      temp_max: 17.7,
      pressure: 1012,
      humidity: 42,
      sea_level: 1012,
      grnd_level: 984,
    },
    visibility: 10000,
    wind: { speed: 3.08, deg: 132, gust: 3.25 },
    clouds: { all: 73 },
    dt: 1676828242,
    sys: { country: 'IN', sunrise: 1676770469, sunset: 1676810799 },
    timezone: 19800,
    id: 1264728,
    name: 'Delhi',
    cod: 200,
  };

  constructor(private fetch: FetchWeatherService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  private getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            console.log(
              'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
            );
            this.fetch
              .fetchData(position.coords.latitude, position.coords.longitude)
              .subscribe((data: WeatherResponse) => {
                this.weatherResponse = data;
                this.img = `./../../../assets/${this.weatherResponse.weather[0].main}.png`;
              });
            this.lng = position.coords.longitude;
          }
        },
        (error: PositionError) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
