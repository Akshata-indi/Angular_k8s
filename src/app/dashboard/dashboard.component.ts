import { Component, Input} from '@angular/core';
// import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // dropdownToggle = false; // Define dropdownToggle property
// assign a value to the HR property
  // Menu: string = "Menu";
  // HR: string = "HR";
  // Admin: string = "Admin"; 
  // Lead: string = "Lead";
  // Manager: string = "Manager"
  // Chart: string = "Org Chart"

  // dashboardMenuOptions = ['Admin', 'HR', 'Manager', 'Profile'];

  ngOnInit() {
  // @Input() Img ="../../assets/icon1.png "
    // console.log('dashboardMenuOptions', this.dashboardMenuOptions);
  }
    
  // @ViewChild('navbarComponent')
  // navbarComponent: NavbarComponent = new NavbarComponent;  
    
  // Home = 'Home';
  // Contact = 'Contact';
  // Content1 = 'HR';
  // two = 'Admin';
  // three= 'Lead';
  // three = 'manager';


}
