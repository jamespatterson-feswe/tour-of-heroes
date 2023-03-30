import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private $messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addMessage(message: string): void {
    const msgs = this.$messages.getValue().concat([message]);
    this.$messages.next(msgs);
  }

  public clearMessages(): void {
    this.$messages.next([]);
  }

  public getMessages(): Observable<string[]> {
    return this.$messages.asObservable();
  }
}
