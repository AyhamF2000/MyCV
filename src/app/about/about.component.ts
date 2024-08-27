import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  title: string;
  description: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutMe:string = 
 `I am Ayham Farhat from Buqata-Golan Heights, currently finishing my education at Tel Hai College.<br>
  During my years of study at Tel Hai, I have completed several projects in web development (TS, JS, CSS, HTML),<br> C++ and Python.<br>
  I am part of the Excellenteam program at Tel Hai, where I focus on Python, C++, and Linux.<br>
  And currently we are preparing for the upcoming bootcamp course.
  
  `;

  skills: Service[] = [
    { title: 'Frontend & Backend Development', description: 'Full-stack web development with Angular, Node.js, or ASP.NET' },
    { title: 'C++ Game Development', description: 'Creating games with a focus on C++ logic and algorithms.' },
    { title: 'Problem Solving & Open to Learn', description: 'Tackling coding challenges and eager to learn new technologies.' }
  ];

  experiences: Service[] = [
    { title: '2023 - Current', description: 'Continuing studies at Tel Hai College, focusing on advanced topics in programming and software development.' },
    { title: '2020 - 2023', description: 'Studied at Tel Hai College, developing a variety of apps and games, honing skills in frontend technologies.' }
  ];

  educations: Service[] = [
    { title: '2024', description: 'BSc in Computer Science' },
    { title: '2024', description: 'Completed an advanced course on Udemy' }
  ];


  activeTab: string = 'skills';
  activeTabInfo: string = 'skills';
  opentab(tabname: string): void {
    this.activeTab = tabname;          // to do the red line animation for eatch section
    this.activeTabInfo = tabname;      // to show the relevant info for each section
  }

  

}
