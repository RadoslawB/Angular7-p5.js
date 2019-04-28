# Angular7-p5.js integration boilererplate

Inclued typings for p5.js
This startup package was initialy generated with Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## Install
```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Example

```typescript
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as P5 from 'p5';

// define callback for p5 constructor
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
  template: '<div #sketch></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  p5: P5;
  // append canvas created by p5 instance to HTML element
  @ViewChild('sketch') sketch: ElementRef;

  ngOnInit(): void {
    this.p5 = new P5(sketch, this.sketch.nativeElement);
  }
}
```
