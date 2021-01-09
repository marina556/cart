import { NgModule } from '@angular/core';
import { BtnComponent } from './btn.component';
import { Btn2Component } from './btn2/btn2.component';



@NgModule({
  declarations: [BtnComponent, Btn2Component],
  imports: [
  ],
  exports: [BtnComponent]
})
export class BtnModule { }
