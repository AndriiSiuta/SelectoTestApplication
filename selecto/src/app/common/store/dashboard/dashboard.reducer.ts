import {
  createEntityAdapter,
  EntityAdapter,
  EntityState
} from "@ngrx/entity";
import {WeatherModel} from "./weather.model";
import {Action} from "@ngrx/store";
import {
  LoadWeatherStatus,
  SetWeatherData
} from "./dashboard.actions";

export interface DashboardState extends EntityState<WeatherModel> {
  selectedCountryId: number | null,
  isLoaded: boolean
}

export const adapter: EntityAdapter<WeatherModel> = createEntityAdapter<WeatherModel>();

export const initialState: DashboardState = adapter.getInitialState({
  selectedCountryId: null,
  isLoaded: false
});

export function dashboardReducer(state = initialState, action: Action): DashboardState {
  if (action instanceof SetWeatherData) {
   return adapter.addAll(action.payload, state);
  }

  if (action instanceof LoadWeatherStatus) {
    return {
      ...state,
      isLoaded: action.payload
    }
  }

  return state;
}
