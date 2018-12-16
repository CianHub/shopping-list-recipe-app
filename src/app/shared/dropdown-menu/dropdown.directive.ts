import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') showMenu = false;

  @HostListener('document:click', ['$event'])
  addClass($event: Event) {
    if (!this.elementRef.nativeElement.contains($event.target)) {
      if (this.showMenu) {
        this.showMenu = false;
      }
    } else {
      this.showMenu = !this.showMenu;
    }
  }
}
