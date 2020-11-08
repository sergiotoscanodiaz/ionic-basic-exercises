import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise07PageRoutingModule } from './exercise07-routing.module';

import { Exercise07Page } from './exercise07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise07PageRoutingModule
  ],
  declarations: [Exercise07Page]
})
export class Exercise07PageModule {}
