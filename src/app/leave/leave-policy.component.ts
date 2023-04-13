import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-leave-policy',
  templateUrl: './leave-policy.component.html',
  styleUrls: ['./leave-policy.component.css']
})
export class LeavePolicyComponent {
// Days: number = 0; // initialize
// EndDate: any;
// StartDate: any;
// reason: any;
// Sick: any;
// Casual: any;
// leaveType: any;
  dashboardMenuOptions: (string | { label: string; link: string; })[] = [];


// calculateDays(): void {
//   const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//   const startDate = new Date(this.StartDate);
//   const endDate = new Date(this.EndDate);
//   const diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay)) + 1;
//   this.Days = diffDays;
// }

//   @ViewChild('navbarComponent')
//   navbarComponent: NavbarComponent = new NavbarComponent;

  
//   Home = 'Home';
//   Contact = 'Contact';
//   About = 'About';

//   onSubmit() {
//     // code to submit the form
//   }


}
