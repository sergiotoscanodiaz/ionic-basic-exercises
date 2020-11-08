import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise05PageRoutingModule } from './exercise05-routing.module';

import { Exercise05Page } from './exercise05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise05PageRoutingModule
  ],
  declarations: [Exercise05Page]
})
export class Exercise05PageModule {}
