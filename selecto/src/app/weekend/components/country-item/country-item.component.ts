import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from "@angular/core";

@Component({
  selector: 'country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CountryItemComponent implements OnChanges {
  visited: boolean;
  wantVisit: boolean;
  @Input() country: any;
  @Output() countryStatus = new EventEmitter<any>();
  @Output() clickDelete = new EventEmitter<any>();

  ngOnChanges() {
    this.visited = this.country.visited;
    this.wantVisit = this.country.want_visit;
  }

  updateStatus(status: string) {

    switch (status) {
      case 'visited': return this.countryStatus.emit({
        id: this.country.id,
        changes: {
          visited: true
        }
      });

      case 'want_visit': return this.countryStatus.emit({
        id: this.country.id,
        changes: {
          want_visit: true
        }
      })
    }
  }

  deleteItem() {
    this.clickDelete.emit(this.country.id);
  }
}
