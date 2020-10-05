import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseoverDirective } from '../directive/mouseover.directive';
import { NavComponent } from '../nav/nav.component';



@NgModule({
  declarations: [MouseoverDirective,NavComponent],
  imports: [
    CommonModule
  ],
  exports:[MouseoverDirective,NavComponent]
})
export class SharedModuleModule { }
