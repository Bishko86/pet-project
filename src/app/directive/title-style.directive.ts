import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleStyle]'
})
export class TitleStyleDirective {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2) {

      this.renderer.addClass(this.elementRef.nativeElement, 'style-of-title');
    }

}
