import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  // myWorks: work[] = [
  //   {photoUrl: '/assets/images/work-2.png', title: 'Music App', description: 'aaaaaaaaaaahhh', href: 'https://getbootstrap.com/docs/4.0/components/navbar/'},
  //   {photoUrl: '/assets/images/work-2.png', title: 'Music App', description: 'aaaaaaaaaaahhh', href: 'https://getbootstrap.com/docs/4.0/components/navbar/'},
  //   {photoUrl: '/assets/images/work-2.png', title: 'Music App', description: 'aaaaaaaaaaahhh', href: 'https://getbootstrap.com/docs/4.0/components/navbar/'}
  // ];

}


interface work {
  photoUrl: string;
  title: string;
  description: string;
  href: string;
}