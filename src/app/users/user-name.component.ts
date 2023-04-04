import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3>{{ name }}</h3> `,
  styles: [],
})
export class UserNameComponent {
  @Input({ required: true }) name!: string;
}
