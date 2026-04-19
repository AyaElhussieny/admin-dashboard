import { Component } from '@angular/core';
import { Table } from '../../../shared/UI/table/table';

@Component({
  selector: 'app-orders',
  imports: [Table],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {}
