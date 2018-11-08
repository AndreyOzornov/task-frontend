import {Component, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'nav-elem',
  templateUrl: './nav.component.html'
})


export class NavComponent implements OnInit {
  @Input() title: string;
  show = false;
  public innerWidth: any;
  isThemeDark: boolean;
  loggedInUserName = '';

  constructor(private titleService: Title,
              private cookies: CookieService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.titleService.setTitle(this.title + ' | aucobo');
    if (this.cookies.get('theme') === 'default') {
      this.isThemeDark = false;
    } else {
      this.isThemeDark = true;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  toggleCollapse() {
    this.show = !this.show
  }

  toggleSlider() {
    const cookie = this.cookies.get('theme');
    if (cookie === 'default') {
      this.cookies.put('theme', 'dark');
      this.renderer.setAttribute(document.body, 'data-theme', 'dark');
    }

    if (cookie === 'dark') {
      this.cookies.put('theme', 'default');
      this.renderer.setAttribute(document.body, 'data-theme', 'default');
    }
  }


}
