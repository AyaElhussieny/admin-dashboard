import { Component, EventEmitter, input, output, Output } from "@angular/core";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ProgressSpinner } from "primeng/progressspinner";

@Component({
  selector: "app-main-btn",
  imports: [ProgressSpinnerModule, ProgressSpinner],
  templateUrl: "./main-btn.component.html",
  styleUrl: "./main-btn.component.css",
})
export class MainBtnComponent {
  action = output<void>();

  btnName = input<string>();
  btnColor = input<string>();
  disabled = input<boolean>();
  borderColor = input<string>();
  btnTxColor = input<string>();
  width = input<boolean>();
  loading = input<boolean>();

  sendAction() {
    this.action.emit();
  }
}
