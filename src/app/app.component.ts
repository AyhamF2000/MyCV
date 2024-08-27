import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, AboutComponent, ServicesComponent, WorkComponent,ContactMeComponent, CommonModule], //to add components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCV';

  goToPublishedSite(): void {
    window.open('https://freindspaceapp.fly.dev', '_blank'); // Change URL to your site
  }
}
