import {PersonGroup} from './persongroup';

export class User extends PersonGroup {
  firstname: string;
  lastname: string;
  mail: string;

  constructor() {
    super();
    this.name = '';
    this.firstname = '';
    this.lastname = '';
  }

}


