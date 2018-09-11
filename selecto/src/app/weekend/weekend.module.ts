import {NgModule} from "@angular/core";
import {WeekendMainContainer, ListOfCountriesContainer} from "./containers";
import {
  AddCountryComponent,
  CountryItemComponent,
  RefreshButtonComponent,
  WeekendDaysComponent
} from "./components";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {weekendRoutes} from "./weekend.routes";
import {
  NgbActiveModal,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import {
  MatButtonModule,
  MatCardModule
} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {WeekendEffect} from "@selecto/common/store/weekend/weekend.effect";

const components = [
  WeekendMainContainer,
  WeekendDaysComponent,
  ListOfCountriesContainer,
  CountryItemComponent,
  RefreshButtonComponent,
  AddCountryComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(weekendRoutes),
    EffectsModule.forFeature([WeekendEffect])
  ],
  providers: [
    NgbActiveModal
  ]
})

export class WeekendModule {}
