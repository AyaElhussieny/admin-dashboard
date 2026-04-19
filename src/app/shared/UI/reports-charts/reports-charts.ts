import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-reports-charts',
  imports: [NgxChartsModule],
  templateUrl: './reports-charts.html',
  styleUrl: './reports-charts.css',
})
export class ReportsCharts {
  colorScheme: any = {
    domain: ['#3B82F6']
  };
  data = [
    {
      name: 'Sales',
      series: [
        { name: 'Mon', value: 0 },
        { name: 'Tue', value: 48000 },
        { name: 'Wed', value: 22000 },
        { name: 'Thu', value: 52000 },
        { name: 'Fri', value: 68000 },
        { name: 'Sat', value: 20000 },
        { name: 'Sun', value: 70000 },
      ],
    },
  ];

  referenceLines = [
    {
      name: 'Current',
      value: 70000,
    },
  ];
}
