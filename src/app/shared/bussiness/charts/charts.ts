import { Component } from '@angular/core';
import { VisableCharts } from '../../UI/visable-charts/visable-charts';
import { ReportsCharts } from '../../UI/reports-charts/reports-charts';

@Component({
  selector: 'app-charts',
  imports: [ReportsCharts, VisableCharts],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {}
