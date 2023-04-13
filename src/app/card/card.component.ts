import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title?: string;
  @Input() content?: string;
  @Input() img?: string;
  @Input() clickhere?: string;

  ngOnInit() {
    console.log(this.img); // Output: Card image
    console.log(this.content); // Output: undefined
  }
}
