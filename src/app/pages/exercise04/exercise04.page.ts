import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise04',
  templateUrl: './exercise04.page.html',
  styleUrls: ['./exercise04.page.scss'],
})
export class Exercise04Page implements OnInit {

  name: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    this.message = '¡Hola ' + this.name + '!';
  }

}
