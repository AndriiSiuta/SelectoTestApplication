import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";
import {Observable} from "rxjs/index";
import {AppState} from "@selecto/common/store/types/app-state";
import {Store} from "@ngrx/store";
import {
  getAllCountries,
  getCountriesId
} from '@selecto/common/store'
import {
  AddCountry,
  DeleteCountry,
  LoadCountries,
  SetAllCountries,
  SetVisit
} from "@selecto/common/store/weekend/weekend.actions";

@Component({
  selector: 'country-list',
  templateUrl: './list-of-countries.container.html',
  styleUrls: ['./list-of-countries.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListOfCountriesContainer {
  countries$: Observable<any>;
  countriesId$: Observable<any>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch(new LoadCountries());
    this.countries$ = this.store.select(getAllCountries);
    this.countriesId$ = this.store.select(getCountriesId);
  }

  updateCountryState(status: any) {
    this.store.dispatch(new SetVisit(status));
  }

  resetStoreCountries(initialCountries: any) {
    this.store.dispatch(new SetAllCountries(initialCountries));
  }

  deleteCountry(id: number) {
    this.store.dispatch(new DeleteCountry(id.toString()));
  }

  addNewCountry(country: any) {
    this.store.dispatch(new AddCountry(country));
  }
}
