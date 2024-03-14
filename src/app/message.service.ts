import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  clear(){
    this.messages = [];
  }

  addMessage(message){
    this.messages.push(message)
  }
}
