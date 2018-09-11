import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";

@Component({
  selector: 'weekend-days',
  templateUrl: './weekend-days.component.html',
  styleUrls: ['./weekend-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeekendDaysComponent {}
