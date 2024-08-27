import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  @ViewChild('messagesSection', { static: false }) messagesSection!: ElementRef;
  @ViewChild('loginSection', { static: false }) loginSection!: ElementRef;
  
  ngAfterViewInit() {
    
      this.messagesSection.nativeElement.style.display = 'none';
  }
  showMessages() {
    const loginDisplayStyle = window.getComputedStyle(this.loginSection.nativeElement).getPropertyValue('display');
    
    this.loginSection.nativeElement.style.display = loginDisplayStyle === 'none' ? 'block' : 'none';
    this.messagesSection.nativeElement.style.display = loginDisplayStyle === 'none' ? 'none' : 'block';
  }

  
  

}

 
