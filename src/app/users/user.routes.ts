import { Routes } from '@angular/router';
import { zeichGuard } from '../zeich.guard';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';

const user_routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UserComponent,
    canActivate: [zeichGuard],
  },
];

export default user_routes;
