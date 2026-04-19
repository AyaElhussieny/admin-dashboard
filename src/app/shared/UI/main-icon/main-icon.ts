import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-icon',
  imports: [],
  templateUrl: './main-icon.html',
  styleUrl: './main-icon.css',
})
export class MainIcon {
  icon = input<string>();
}
