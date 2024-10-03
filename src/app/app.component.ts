import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleCounterApp';
  counter: number = 0;
  step: number = 1; // Default step size
  minLimit: number = -1000; // Set the minimum value
  maxLimit: number = 1000; // Set the maximum value

  increment() {
    if (this.counter < this.maxLimit) {
      this.counter += this.step;
    }
  }

  decrement() {
    if (this.counter > this.minLimit) {
      this.counter -= this.step;
    }
  }

  reset() {
    this.counter = 0;
  }

}
