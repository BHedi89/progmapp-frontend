import {Semester} from '../enum/semester.enum';

export interface Class {
  id: string;
  year: Date;
  semester: Semester;
  isActive?: boolean;
}
