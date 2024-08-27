import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // to open small page
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  mail ='ayham.af1@gmail.com'
  phone ='+972508588700'

  constructor(public dialog: MatDialog) { }
  openModal() {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '40%',
      height: '40%',
      
      // Add any other configuration options here
    });
    
    // Subscribe to the afterClosed event to perform actions after the modal is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  
}
