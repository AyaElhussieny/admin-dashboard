import { Component, input } from '@angular/core';

@Component({
  selector: 'app-analytic-card',
  imports: [],
  templateUrl: './analytic-card.html',
  styleUrl: './analytic-card.css',
})
export class AnalyticCard {
  img = input<string>();
  style = input<string>();
  title = input<string>();
  discount = input<string>();
  coast = input<string>();
}
