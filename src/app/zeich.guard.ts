import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './users/user.service';

export const zeichGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  return true;
};
