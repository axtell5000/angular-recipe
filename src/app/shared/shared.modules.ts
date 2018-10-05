
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from './dropdown.directive';

// In shared modules do not import Servicess

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {}
