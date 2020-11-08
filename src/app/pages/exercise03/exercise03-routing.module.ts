import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise03Page } from './exercise03.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise03PageRoutingModule {}
