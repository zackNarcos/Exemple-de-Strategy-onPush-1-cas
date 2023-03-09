import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../cards/card.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserComponent {
  @Input() users$?: Observable<User[]>;
  users: User[] = [];
  changeDetectionCount = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  // function for start ChangeDetection
  triggerChangeDetection() {
    this.changeDetectionCount++;
    this.cdr.markForCheck();
  }
}
