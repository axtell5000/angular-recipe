import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // on bind put 'open' on the class attribute

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
