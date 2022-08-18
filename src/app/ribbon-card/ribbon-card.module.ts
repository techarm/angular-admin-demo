import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonCardComponent } from './ribbon-card.component';



@NgModule({
  declarations: [
    RibbonCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RibbonCardComponent
  ]
})
export class RibbonCardModule { }
