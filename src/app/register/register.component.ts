import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Home: string = "Home";
  Contact: string = "Contact";
  About: string = "About";

  @ViewChild('navbarComponent')
  navbarComponent: NavbarComponent = new NavbarComponent;
  
  

  
  constructor(private router: Router) { 

  }
onSubmit() {
  this.router.navigate(['/details']);
}

}
