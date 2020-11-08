import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise07Page } from './exercise07.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise07PageRoutingModule {}
