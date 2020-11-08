import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01',
  templateUrl: './exercise01.page.html',
  styleUrls: ['./exercise01.page.scss'],
})
export class Exercise01Page implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
  }

  showName() {
    this.name = 'Sergio Toscano Díaz';
  }

  cleanName() {
    this.name = '';
  }
}
