import { Component, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @ViewChild('myCanvas')
  canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    // TODO: Draw your graph on the canvas using data from the backend
  }

}
