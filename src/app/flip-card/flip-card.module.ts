import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardBackComponent } from './flip-card-back';
import { FlipCarFrontComponent } from './flip-card-front';

@NgModule({
  declarations: [FlipCardComponent, FlipCarFrontComponent, FlipCardBackComponent],
  imports: [CommonModule],
  exports: [FlipCardComponent, FlipCarFrontComponent, FlipCardBackComponent],
})
export class FlipCardModule {}
