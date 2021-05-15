import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  private createMessage(type: string, summary: string, detail: string): void {
    this.messageService.add({severity: type, summary, detail})
  }

  public showSuccess(titre: string, message: string): void {
    this.createMessage('success', titre, message);
  }

  public showError(titre: string, message: string): void {
    this.createMessage('error', titre, message);
  }

  public showInfo(titre: string, message: string): void {
    this.createMessage('info', titre, message);
  }

  public clear() {
    this.messageService.clear();
  }
}
