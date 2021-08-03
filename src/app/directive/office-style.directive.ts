import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOfficeStyle]'
})
export class OfficeStyleDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'why-us-text-style');
  }
}
