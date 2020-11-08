import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise06Page } from './exercise06.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise06PageRoutingModule {}
