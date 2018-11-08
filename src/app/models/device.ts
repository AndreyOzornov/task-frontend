import {User} from './user';
import {Configuration} from './configuration';

export class Device {
  _id: string;
  owner: User;
  online: boolean;
}
