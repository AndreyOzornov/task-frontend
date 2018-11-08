import {Component, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {SmartwatchService} from './services/smartwatch.service';
import {Smartwatch} from './models/smartwatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

}
