import {Class} from './class';

export interface Student {
  name: string;
  loginName: string;
  emailAddress: string;
  password: string;
  classes: Class[];
}
