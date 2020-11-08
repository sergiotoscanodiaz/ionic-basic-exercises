import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise06PageRoutingModule } from './exercise06-routing.module';

import { Exercise06Page } from './exercise06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise06PageRoutingModule
  ],
  declarations: [Exercise06Page]
})
export class Exercise06PageModule {}
