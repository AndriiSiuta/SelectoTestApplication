import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";
import {
  adapter,
  DashboardState
} from "./dashboard.reducer";

import {
  prop as Rprop,
} from 'ramda';

export const getDashboardSelector = (thisSelector: MemoizedSelector<any, DashboardState>) => {
  return adapter.getSelectors(thisSelector);
};

export const getDashboardState = createFeatureSelector(
  'dashboard'
) as MemoizedSelector<any, DashboardState>;

export const {
  selectAll: getAllWeather
} = getDashboardSelector(getDashboardState);

export const getLoadWeatherStatus = createSelector(
  getDashboardState,
  Rprop('isLoaded')
);
