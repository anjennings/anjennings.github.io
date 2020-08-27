
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[projectContainer]',
})
export class gitProjectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
