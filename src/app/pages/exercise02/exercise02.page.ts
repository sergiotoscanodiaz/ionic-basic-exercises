import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.page.html',
  styleUrls: ['./exercise02.page.scss'],
})
export class Exercise02Page implements OnInit {

  name = '';
  buttonMessage = 'Muestra nombre';

  constructor() { }

  ngOnInit() {
  }

  toggleName() {
    if (this.name === '') {
      this.name = 'Sergio Toscano Díaz';
      this.buttonMessage = 'Limpia pantalla';
    } else {
      this.name = '';
      this.buttonMessage = 'Muestra nombre';
    }
  }
}
