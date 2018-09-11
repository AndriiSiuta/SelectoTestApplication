import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import {
  NgbActiveModal,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";

import {
  find as Rfind
} from 'ramda';
import {
  checkIfNotEqual,
  generateId
} from "../../utility/generate-id";

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCountryComponent {
  newCountry: string;
  generateCountryId: number;
  modalRef: any;
  @Input() countriesId: any;
  @Output() createdCountry = new EventEmitter<any>();

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {

  }
  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

  takeCountryName($event: any) {
    this.newCountry = $event.target.value;
  }

  addCountry() {
    this.generateCountryId = generateId();

    let newCountryId = checkIfNotEqual(this.countriesId, this.generateCountryId);
    this.createdCountry.emit({
      country: this.newCountry,
      id: newCountryId,
      want_visit: false,
      visited: false
    });

    this.close();
  }
}
