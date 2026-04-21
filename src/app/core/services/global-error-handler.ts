import { ErrorHandler, inject, Injectable } from "@angular/core";
import { ToastService } from "./toast.service";

@Injectable({ providedIn: "root" })
export class GlobalErrorHandler implements ErrorHandler {
  private readonly toastService = inject(ToastService);
  handleError(error: any): void {
    // Log to external service or show a toast
    console.error("An error occurred", { cause: error });
    this.toastService.show("An error occurred", {
      type: "error",
      summary: error,
    });
  }
}
