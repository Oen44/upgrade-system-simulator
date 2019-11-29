import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface ChatMessage {
  text: string;
  color: string;
}

@Component({
  selector: 'us-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatboxComponent implements OnInit {
  messages: ChatMessage[] = [];
  private last = 0;
  constructor() {}

  ngOnInit() {
    this.addMessage();
    this.addMessage();
  }

  addMessage() {
    this.messages.unshift({ text: 'Message' + ++this.last, color: '#0f0' });
  }
}
