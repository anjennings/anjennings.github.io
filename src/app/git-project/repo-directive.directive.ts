import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepoDirective]'
})
export class RepoDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
