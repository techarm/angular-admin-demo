import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon-card',
  templateUrl: './ribbon-card.component.html',
  styleUrls: ['./ribbon-card.component.scss'],
})
export class RibbonCardComponent implements OnInit {
  @Input() ribbonText = '';
  @Input() position = 'left' || 'right';

  constructor() {}

  ngOnInit(): void {}
}
