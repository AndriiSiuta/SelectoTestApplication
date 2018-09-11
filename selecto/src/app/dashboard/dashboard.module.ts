import {NgModule} from "@angular/core";
import {DashboardMainContainer} from "./containers";
import {DashboardItemComponent} from "./components";
import {RouterModule} from "@angular/router";
import {dashboardRoutes} from "./dashboard.routes";
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffect} from "../common/store/dashboard/dashboard.effect";
import {CommonModule} from "@angular/common";
import {
  MatSortModule,
  MatTableModule
} from "@angular/material";

const components = [
  DashboardMainContainer,
  DashboardItemComponent
];


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    EffectsModule.forFeature([DashboardEffect])
  ]
})

export class DashboardModule {}
