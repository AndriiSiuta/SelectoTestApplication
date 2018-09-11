import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";

@Component({
  selector: 'weekend-main-container',
  templateUrl: './weekend-main.container.html',
  styleUrls: ['./weekend-main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeekendMainContainer {}
