import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginMenuOptions = ['Home', 'About', 'Login', 'Signup'];
  username: string = '';
  password: string = '';
  rememberMe: boolean = false; // Define the rememberMe property as a boolean
  
  

  // @ViewChild('navbarComponent')
  // navbarComponent: NavbarComponent = new NavbarComponent;
  
  // Home = 'Home';
  // Contact = 'Contact';
  // About = 'About';

  constructor(private router: Router) { 
    // Assign a value to rememberMe in the constructor
    this.rememberMe = false;
  }


  login() {
    this.router.navigate(['/dashboard']);
  }

}
