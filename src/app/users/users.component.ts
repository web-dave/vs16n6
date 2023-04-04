import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { IUser, UserService } from './user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ng-container *ngFor="let user of users()">
      <a [routerLink]="[user.id]">{{ user.name }}</a> |
    </ng-container>

    <pre>{{ usersS() | json }}</pre>
  `,
  styleUrls: [],
})
export class UsersComponent {
  users: WritableSignal<IUser[]> = signal(inject(UserService).users);
  usersS = computed(() => this.users().map((u) => u.age));

  constructor() {
    setTimeout(() => {
      this.users.mutate((value) => (value[2].age = 99));
    }, 3000);
  }
}
