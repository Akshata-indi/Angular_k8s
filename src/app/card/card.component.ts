import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  Img!: string;
  @Input() content!: TemplateRef<any>;

  @Input() title!: string;
  constructor() {}


  ngOnInit() {
    // console.log(this.content); // Output: undefined 
  }
}
