import { Injectable } from '@angular/core';

export interface IUser {
  name: string;
  age: number;
  id: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  users: IUser[] = [
    {
      name: 'Klaus',
      age: 7,
      id: 0,
    },
    {
      name: 'Marie',
      age: 8,
      id: 1,
    },
    {
      name: 'Ulla',
      age: 3,
      id: 2,
    },
    {
      name: 'Tufftaff',
      age: 1,
      id: 3,
    },
  ];
}
