import {Button} from './button';
import {Device} from './device';
import {Configuration} from './configuration';
import {User} from './user';

export class Smartwatch extends Device {
  buttons: Button[];

  constructor() {
    super();
    this.buttons = new Array<Button>();
    this.owner = new User();
  }
}
