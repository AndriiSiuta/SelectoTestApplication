import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from "@angular/core";

@Component({
  selector: 'dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardItemComponent implements OnChanges {
  @Input() currentWeather: any;

  dataSource: any;
  displayedColumns: string[] = ['Capital', 'Temperature', 'WeatherCondition']
  ngOnChanges() {
    this.dataSource = this.currentWeather;
  }
}
