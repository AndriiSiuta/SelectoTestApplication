import {
  createEntityAdapter,
  EntityAdapter,
  EntityState
} from "@ngrx/entity";
import {CountryModel} from "@selecto/common/store/weekend/types/country.model";
import {Action} from "@ngrx/store";
import {
  AddCountry,
  DeleteCountry,
  SetAllCountries,
  SetIsLoadCountry,
  SetVisit
} from "@selecto/common/store/weekend/weekend.actions";

export interface WeekendState extends EntityState<CountryModel> {
  isLoad: boolean
}

export const adapter: EntityAdapter<CountryModel> = createEntityAdapter<CountryModel>();

export const initialState: WeekendState = adapter.getInitialState({
  isLoad: false
});

export function weekendReducer(state = initialState, action: Action) {
  if (action instanceof SetVisit) {
    return adapter.updateOne({
      id: action.payload.id,
      changes: action.payload.changes
    }, state);
  }

  if (action instanceof SetAllCountries) {
    return adapter.addAll(action.payload, state);
  }

  if (action instanceof SetIsLoadCountry) {
    return {
      ...state,
      isLoad: action.payload
    }
  }

  if (action instanceof DeleteCountry) {
    return adapter.removeOne(action.payload, state);
  }

  if (action instanceof AddCountry) {
    return adapter.addOne(action.payload, state);
  }

  return state;
}
