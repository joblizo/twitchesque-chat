import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages = new BehaviorSubject<ChatMessage[]>([]);
  messages$ = this.messages.asObservable();

  constructor() {}

  sendMessage(message: string, username: string = 'User'): void {
    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      username,
      message,
      timestamp: new Date()
    };

    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, newMessage]);
  }

  // This method will be useful when we implement external message sources
  receiveMessage(message: ChatMessage): void {
    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, message]);
  }
}