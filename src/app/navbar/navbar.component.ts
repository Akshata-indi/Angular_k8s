import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  menuOptions: (string | { label: string, link: string })[] = [];
  @Input()
  dashboardMenuOptions: (string | { label: string, link: string })[] = [];
 
  // show = true;
  // @Input() Content1?: String;
  // @Input() Content2? : string;
  // @Input() Content3? : string;
  // @Input() Content4?: string;
  // @Input() Content5?: string;
  // @Input() Content6?: string;
  // @Input() clickhere?: string;

  ngOnInit() {
    console.log('menuOptions', this.menuOptions);
  }
  //   console.log('Content2:', this.Content2);
  //   console.log('Content3:', this.Content3);
  //   console.log('Content4:', this.Content4);
  //   console.log('Content5:', this.Content4);
  //   console.log('Content6:', this.Content4);
  // }

  // constructor() { }

}
