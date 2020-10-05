import {Role} from './role';

export interface User {
  name: string;
  loginName: string;
  emailAddress: string;
  password?: string;
  roles: Role[];
}
