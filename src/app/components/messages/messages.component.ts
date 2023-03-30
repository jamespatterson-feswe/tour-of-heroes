/** core/rxjs */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
/** services */
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public messages: string[] = [];

  constructor(private msgService: MessagesService) {}

  ngOnInit(): void {
    this.subscription = this.msgService.getMessages().subscribe({
      next: (data: string[]) => {
        this.messages = data;
      }
    });
  }

  public clearMessages(): void {
    this.msgService.clearMessages();
  }

  public getMessages(): string[] {
    return this.messages;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
