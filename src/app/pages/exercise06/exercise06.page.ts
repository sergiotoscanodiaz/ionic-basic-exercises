import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise06',
  templateUrl: './exercise06.page.html',
  styleUrls: ['./exercise06.page.scss'],
})
export class Exercise06Page implements OnInit {

  position = 1;

  constructor() { }

  ngOnInit() {
  }

  incPosition() {
    this.position++;
  }

}

