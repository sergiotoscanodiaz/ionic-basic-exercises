import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise04PageRoutingModule } from './exercise04-routing.module';

import { Exercise04Page } from './exercise04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise04PageRoutingModule
  ],
  declarations: [Exercise04Page]
})
export class Exercise04PageModule {}
