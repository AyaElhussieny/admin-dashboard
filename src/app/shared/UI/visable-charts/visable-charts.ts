import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-visable-charts',
  imports: [NgxChartsModule],
  templateUrl: './visable-charts.html',
  styleUrl: './visable-charts.css',
})
export class VisableCharts {
  data = [
    { name: 'Mun', value: 45 },
    { name: 'Tue', value: 70 },
    { name: 'Wed', value: 40 },
    { name: 'Thu', value: 20 },
    { name: 'Fri', value: 55 },
    { name: 'Sut', value: 10 },
    { name: 'Sun', value: 5 },
  ];

  colorScheme: any = {
    domain: ['#2563EB'],
  };

  formatLabel(label: string) {
    return label;
  }
}
