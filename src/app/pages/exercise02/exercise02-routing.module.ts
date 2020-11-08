import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise02Page } from './exercise02.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise02PageRoutingModule {}
