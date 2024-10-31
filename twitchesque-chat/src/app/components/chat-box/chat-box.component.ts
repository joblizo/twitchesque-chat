import { Component } from '@angular/core';

interface ChatMessage {
  username: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  messages: ChatMessage[] = [
    { username: 'User1', message: 'Hello everyone!', timestamp: new Date() },
    { username: 'User2', message: 'Hi there!', timestamp: new Date() },
    // Add more sample messages for testing
  ];
}