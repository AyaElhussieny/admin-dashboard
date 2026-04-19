import { Component, input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [InputTextModule, IconFieldModule, FloatLabelModule, InputIconModule, BadgeModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
})
export class InputSearchComponent {
  placeholder = input<string>();
  icon = input<string>();
}
