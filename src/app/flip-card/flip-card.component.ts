import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.toggleProperty = !this.toggleProperty;
  }
}
