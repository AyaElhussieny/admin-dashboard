import { inject, Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root",
})

export class AlertMessageService {
  _messageService = inject(MessageService);

  addMsg(msg: string) {
    this._messageService.add({
      severity: "error",
      summary: "Error",
      detail: msg,
    });
  }
}
