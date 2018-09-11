import {Routes} from "@angular/router";

export const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}, {
  path: 'weekend',
  loadChildren: './weekend/weekend.module#WeekendModule'
}, {
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule'
}];
