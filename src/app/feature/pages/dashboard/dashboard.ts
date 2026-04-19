import { Component } from '@angular/core';
import { Table } from '../../../shared/UI/table/table';
import { RouterLink } from '@angular/router';
import { Analytics } from "../../../shared/bussiness/analytics/analytics";

@Component({
  selector: 'app-dashboard',
  imports: [Table, RouterLink, Analytics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
