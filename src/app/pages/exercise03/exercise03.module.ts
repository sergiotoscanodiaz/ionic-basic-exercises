import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise03PageRoutingModule } from './exercise03-routing.module';

import { Exercise03Page } from './exercise03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise03PageRoutingModule
  ],
  declarations: [Exercise03Page]
})
export class Exercise03PageModule {}
