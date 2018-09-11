import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WeatherModel} from "./types/weather-model";
import {map} from "rxjs/operators";
import {ConvertToKelvin} from "../../dashboard/utility/to-kelvin-convert";
import {Observable} from "rxjs/index";
import {
  map as Rmap
} from 'ramda';

const WEATHER_API_KEY = 'e652424169dc5cd81fe37071cf20f890';

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {
  constructor(
    private http: HttpClient
  ) {
  }

  getWeatherList(countryIds: string): Observable<any> {
    return this.http.get<{ cnt: number, list: WeatherModel[] }>(
      `http://api.openweathermap.org/data/2.5/group?id=${countryIds}&appId=${WEATHER_API_KEY}`
    )
      .pipe(
        map((response: any) => {
          return response.list;
        }),
        map(Rmap<WeatherModel[]>((weather) => {
          return {
            temperature: ConvertToKelvin(weather.main.temp),
            country: weather.name,
            id: weather.id,
            weather_condition: weather.weather[0].description,
            visited: false,
            want_visit: false
          }
        }))
      );
  }
}
