import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise01PageRoutingModule } from './exercise01-routing.module';

import { Exercise01Page } from './exercise01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise01PageRoutingModule
  ],
  declarations: [Exercise01Page]
})
export class Exercise01PageModule {}
