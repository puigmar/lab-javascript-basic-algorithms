
import { Directive } from '@angular/core';
import { HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[tweempusUnderline]'
})

export class UnderlineDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ){}

  @HostListener('mouseover') onMouseHover() {
    this.render.addClass(this.el.nativeElement, 'underline');
  }

  @HostListener('mouseout') onMouseOut() {
    this.render.removeClass(this.el.nativeElement, 'underline');
  }

}
