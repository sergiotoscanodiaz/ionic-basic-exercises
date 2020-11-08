import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise05',
  templateUrl: './exercise05.page.html',
  styleUrls: ['./exercise05.page.scss'],
})
export class Exercise05Page implements OnInit {

  minValue = 0;
  maxValue = 0;
  randomNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.minValue + Math.floor(Math.random() * (this.maxValue - this.minValue + 1));
  }
}
