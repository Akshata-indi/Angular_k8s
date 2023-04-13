import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  Home: string = "Home";
  Contact: string = "Contact";
  About: string = "About";

  @ViewChild('navbarComponent')
  navbarComponent: NavbarComponent = new NavbarComponent;
  // cards = [
  //   {
  //     imageSrc: 'https://via.placeholder.com/150',
  //     title: 'Card 1',
  //     content: 'This is the content for card 1'
  //   }
    
  // ];
  
  // constructor(private router: Router) { 

  // }
  // onSubmit() {
  //   this.router.navigate(['/basic-details']);
  // }
  
}
