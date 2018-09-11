import {
  ActionReducer,
  MetaReducer,
} from "@ngrx/store";
import {AppState} from "./types/app-state";
import {localStorageSyncReducer} from "./local-storage/local-storage-sync.reducer";

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = [
  logger, localStorageSyncReducer
];
