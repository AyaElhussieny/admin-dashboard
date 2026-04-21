import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({ providedIn: "root" })
export class ToastService {
  constructor(private messageService: MessageService) {}

  show(message: string, options?: { type?: string; summary?: string; life?: number }) {
    this.messageService.add({
      severity: options?.type || "info",
      summary: options?.summary || "Notification",
      detail: message,
      life: options?.life || 5000,
    });
  }

  clear() {
    this.messageService.clear();
  }
}
