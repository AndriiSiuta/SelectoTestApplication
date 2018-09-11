import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

import {
  mapObjIndexed,
  map as Rmap
} from 'ramda';

@Component({
  selector: 'refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RefreshButtonComponent {
  @Input() allCountries: any;
  @Output() resetData = new EventEmitter<any>();

  resetCountriesData: any;
  resetToDefault() {
    this.resetCountriesData = Rmap(mapObjIndexed((value, key) => {
      if (key === 'visited' || key === 'want_visit') {
        return value = false;
      } else {
        return value;
      }
    }), this.allCountries);

    this.resetData.emit(this.resetCountriesData);
  }
}
