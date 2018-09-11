import {DummyAction} from "@selecto/core/dummy-action";
import {CountryModel} from "@selecto/common/store/weekend/types/country.model";

export class SetVisit extends DummyAction {
  constructor(public payload: any) {
    super();
  }
}

export class SetAllCountries extends DummyAction {
  constructor(public payload: CountryModel[]) {
    super();
  }
}

export class SetIsLoadCountry extends DummyAction {
  constructor(public payload: boolean) {
    super();
  }
}

export class LoadCountries extends DummyAction {}

export class DeleteCountry extends DummyAction {
  constructor(public payload: number) {
    super();
  }
}

export class AddCountry extends DummyAction {
  constructor(public payload: any) {
    super();
  }
}
