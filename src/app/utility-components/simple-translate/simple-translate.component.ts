import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'sTrans',
  templateUrl: './simple-translate.component.html'
})
export class SimpleTranslateComponent implements OnInit {

  @Input('key') key ? = '';
  text: Observable<string>;

  constructor(
    private element: ElementRef,
  ) {
    this.text = this.element.nativeElement.inlineHTML;
  }

  ngOnInit() {
  }


}
