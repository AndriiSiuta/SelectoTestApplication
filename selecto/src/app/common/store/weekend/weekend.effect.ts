import {Injectable} from "@angular/core";
import {
  Actions,
  Effect
} from "@ngrx/effects";
import {ofAction} from "@selecto/core/util/of-action";
import {WeatherApiService} from "../../api-service/get-weather-api.service";
import {
  withLatestFrom,
  filter
} from "rxjs/operators";
import {AppState} from "../types/app-state";
import {Store} from "@ngrx/store";
import {
  catchError,
  switchMap
} from "rxjs/operators";
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
import {
  LoadCountries,
  SetAllCountries,
  SetIsLoadCountry
} from "@selecto/common/store/weekend/weekend.actions";
import {getLoadCountriesStatus} from "@selecto/common/store";

@Injectable()
export class WeekendEffect {
  constructor(
    private actions: Actions,
    private weatherApiService: WeatherApiService,
    private store: Store<AppState>
  ) {
  }

  @Effect()
  countries$ = this.actions
    .pipe(
      ofAction(LoadCountries),
      withLatestFrom(this.store.select(getLoadCountriesStatus)),
      filter(([_, isLoad]) => isLoad === false),
      switchMap(() => {
        return combineLatest(
          this.weatherApiService.getWeatherList(firstQuery),
          this.weatherApiService.getWeatherList(secondQuery),
          ((firstWeatherPart, secondWeatherPart) => Rconcat(firstWeatherPart, secondWeatherPart))
        )
      }),
      switchMap((weatherList: any) => [
        new SetAllCountries(
          Rmap(Rpick(['country', 'id', 'want_visit', 'visited']), weatherList)
        ),
        new SetIsLoadCountry(true)
      ]),
      catchError(() => of(EMPTY))
    )
}
