import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessages') private messagesContainer!: ElementRef;
  
  messages$: Observable<ChatMessage[]>;
  messageInput = new FormControl('', [Validators.required]);
  
  constructor(private chatService: ChatService) {
    this.messages$ = this.chatService.messages$;
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (this.messageInput.value?.trim()) {
      this.chatService.sendMessage(this.messageInput.value);
      this.messageInput.reset();
    }
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = 
        this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }
}