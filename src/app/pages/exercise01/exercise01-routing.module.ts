import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise01Page } from './exercise01.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise01PageRoutingModule {}
