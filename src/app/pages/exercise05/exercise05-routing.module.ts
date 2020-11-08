import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise05Page } from './exercise05.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise05PageRoutingModule {}
