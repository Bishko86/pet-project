import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadowBlock]'
})
export class ShadowBlockDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'shadow');
  }
  // addClass(className: string, element: HTMLDivElement) {
  //   this.renderer.addClass(element, className);
  // }
}
