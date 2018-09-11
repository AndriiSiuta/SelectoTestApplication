import {dashboardReducer} from "./dashboard/dashboard.reducer";
import {weekendReducer} from './weekend/weekend.reducer';

export const reducerMap = {
  dashboard: dashboardReducer,
  weekend: weekendReducer
};
