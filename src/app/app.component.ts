import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { UserNameComponent } from './users/user-name.component';
import { SusersComponent } from './users/susers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SusersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vs16n6';
}
