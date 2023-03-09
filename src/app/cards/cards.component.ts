import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { User } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardsComponent {
  @Input() users?: User;
  changeDetectionCount = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      if (this.users) {
        this.users.name = 'name changed';
        this.cdr.detectChanges();
      }
    }, 3000);
  }

  // function for start ChangeDetection
  triggerChangeDetection() {
    this.changeDetectionCount++;
  }
}
