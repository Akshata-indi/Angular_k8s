import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent {
  Home: string = "Home";
  Contact: string = "Contact";
  About: string = "About";

  @ViewChild('navbarComponent')
  navbarComponent: NavbarComponent = new NavbarComponent;

}
