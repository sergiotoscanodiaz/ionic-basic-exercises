import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise03',
  templateUrl: './exercise03.page.html',
  styleUrls: ['./exercise03.page.scss'],
})
export class Exercise03Page implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  newRandomValue(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

  incrementValue(): void {
    this.n++;
  }

  decrementValue(): void {
    this.n--;
  }

  resetValue() {
    this.n = 0;
  }
}
