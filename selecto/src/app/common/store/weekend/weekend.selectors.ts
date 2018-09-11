import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";
import {
  adapter,
  WeekendState
} from "@selecto/common/store/weekend/weekend.reducer";

import {
  prop as Rprop
} from 'ramda';

export const getWeekendSelector = (thisSelector: MemoizedSelector<any, WeekendState>) => {
  return adapter.getSelectors(thisSelector);
};

export const getWeekendState = createFeatureSelector(
  'weekend'
) as MemoizedSelector<any, WeekendState>;

export const {
  selectAll: getAllCountries,
  selectIds: getCountriesId
} = getWeekendSelector(getWeekendState);

export const getLoadCountriesStatus = createSelector(
  getWeekendState,
  Rprop('isLoad')
);
