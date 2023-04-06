import { Component, computed, inject, Input, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-susers',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    {{ foo() }}
    <pre>{{ users() | async | json }}</pre>
  `,
  styleUrls: [],
})
export class SusersComponent {
  @Input() name: string = '';
  @Input() nickname: string = '';
  service = inject(UserService);
  foo = computed(() => `${this.name} (${this.nickname})`);
  users = computed(() => this.service.getUsers());
}
