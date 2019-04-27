import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as P5 from 'p5';

const sketch = (p: P5) => {

  p.preload = () => {

  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255);
    p.text('P5 working fine.', 100, 100);
  };
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  p5: P5;
  @ViewChild('sketch') sketch: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
    this.p5 = new P5(sketch, this.sketch.nativeElement);
  }
}
