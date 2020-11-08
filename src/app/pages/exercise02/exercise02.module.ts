import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise02PageRoutingModule } from './exercise02-routing.module';

import { Exercise02Page } from './exercise02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise02PageRoutingModule
  ],
  declarations: [Exercise02Page]
})
export class Exercise02PageModule {}
