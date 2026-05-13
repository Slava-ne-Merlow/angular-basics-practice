import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  appHighlight = input('rgba(99, 102, 241, 0.06)');

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
