import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameComponent } from './user-name.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from './user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserNameComponent, RouterLink],
  template: `<app-user-name *ngIf="user$ | async as user" [name]="user.name"/> 
  <a routerLink="../3">same</a><br>
  <a routerLink="..">🔙</a>
  `,
  styles: [],
})
export class UserComponent {
  service = inject(UserService);
  user$ = inject(ActivatedRoute).params.pipe(
    map((params) => {
      console.log(params);
      return params['id'];
    }),
    map((id) => this.service.users[id])
  );

  constructor() {
    console.log(new Date());
  }
  // user = inject(UserService).users[this.userId];
}
