import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "@selecto/common/store/types/app-state";
import {LoadWeather} from "@selecto/common/store/dashboard/dashboard.actions";
import {Observable} from "rxjs/index";
import {
  getAllWeather
} from '@selecto/common/store'
import {WeatherModel} from "@selecto/common/store/dashboard/weather.model";
import {
  sortBy,
  prop as Rprop
} from 'ramda';

@Component({
  selector: 'dashboard-main-container',
  templateUrl: './dashboard-main.container.html',
  styleUrls: ['./dashboard-main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardMainContainer implements OnInit {
  weatherData$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(new LoadWeather())
  }

  ngOnInit() {
    this.weatherData$ = this.store.select(getAllWeather);
  }

  sortWeather(weather: WeatherModel[]) {
    return sortBy(Rprop('temperature'), weather);
  }
}
