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
            this.fetch.fetchData('Delhi').subscribe((data: WeatherResponse) => {
              console.log(data);
              this.lat = data.coord.lat;
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
