import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[winner]' })
export class WinnerDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}
