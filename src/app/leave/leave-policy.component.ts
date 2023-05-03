import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-leave-policy',
  templateUrl: './leave-policy.component.html',
  styleUrls: ['./leave-policy.component.css']
})
export class LeavePolicyComponent {

  startDate!: Date;
  endDate!: Date;

  calculateDays(): number {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diff = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }



}
