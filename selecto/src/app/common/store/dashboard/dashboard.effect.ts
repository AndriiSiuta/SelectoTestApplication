import {Injectable} from "@angular/core";
import {
  Actions,
  Effect
} from "@ngrx/effects";
import {ofAction} from "@selecto/core/util/of-action";
import {
  LoadWeather,
  LoadWeatherStatus,
  SetWeatherData
} from "./dashboard.actions";
import {WeatherApiService} from "../../api-service/get-weather-api.service";
import {
  withLatestFrom,
  filter
} from "rxjs/operators";
import {AppState} from "../types/app-state";
import {Store} from "@ngrx/store";
import {getLoadWeatherStatus} from "./dashboard.selectors";
import {
  catchError,
  switchMap
} from "rxjs/operators";
import {WeatherModel} from "./weather.model";
import {
  combineLatest,
  EMPTY,
  of
} from "rxjs";
import {
  firstQuery,
  secondQuery
} from "@selecto/common/store/const/country-query-id";

import {
  concat as Rconcat,
  pick as Rpick,
  map as Rmap
} from 'ramda'
import {SetAllCountries} from "@selecto/common/store/weekend/weekend.actions";

@Injectable()
export class DashboardEffect {
  constructor(
    private actions: Actions,
    private weatherApiService: WeatherApiService,
    private store: Store<AppState>
  ) {
  }

  @Effect()
  weather$ = this.actions
    .pipe(
      ofAction(LoadWeather),
      withLatestFrom(this.store.select(getLoadWeatherStatus)),
      filter(([_, isLoaded]) => isLoaded === false),
      switchMap(() => {
        return combineLatest(
          this.weatherApiService.getWeatherList(firstQuery),
          this.weatherApiService.getWeatherList(secondQuery),
          ((firstWeatherPart, secondWeatherPart) => Rconcat(firstWeatherPart, secondWeatherPart))
        )
      }),
      switchMap((weatherList: WeatherModel[]) => [
          new SetAllCountries(
            Rmap(Rpick(['country', 'id', 'want_visit', 'visited']), weatherList)
          ),
          new SetWeatherData(weatherList),
          new LoadWeatherStatus(true),
      ]),
      catchError(() => of(EMPTY))
    )
}
