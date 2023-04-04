import { Component, inject, Input, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IUser, UserService } from './user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ng-container *ngFor="let user of users">
      <a [routerLink]="[user.id]">{{ user.name }}</a> |
    </ng-container>
  `,
  styleUrls: [],
})
export class UsersComponent {
  users: IUser[] = inject(UserService).users;
}
