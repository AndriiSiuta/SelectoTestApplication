import {DummyAction} from "@selecto/core/dummy-action";
import {WeatherModel} from "./weather.model";

export class LoadWeather extends DummyAction {
  constructor() {
    super();
  }
}

export class SetWeatherData extends DummyAction {
  constructor(public payload: WeatherModel[]) {
    super();
  }
}

export class LoadWeatherStatus extends DummyAction {
  constructor(public payload: boolean) {
    super();
  }
}


