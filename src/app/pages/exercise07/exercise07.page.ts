import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise07',
  templateUrl: './exercise07.page.html',
  styleUrls: ['./exercise07.page.scss'],
})
export class Exercise07Page implements OnInit {

  pts: number = 0;
  eur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  updatePts() {
    this.pts = this.eur * 166.386;
  }

  updateEuros() {
    this.eur = this.pts / 166.386;
  }
}
