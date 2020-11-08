import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercise01',
    loadChildren: () => import('./pages/exercise01/exercise01.module').then( m => m.Exercise01PageModule)
  },
  {
    path: 'exercise02',
    loadChildren: () => import('./pages/exercise02/exercise02.module').then( m => m.Exercise02PageModule)
  },
  {
    path: 'exercise03',
    loadChildren: () => import('./pages/exercise03/exercise03.module').then( m => m.Exercise03PageModule)
  },
  {
    path: 'exercise04',
    loadChildren: () => import('./pages/exercise04/exercise04.module').then( m => m.Exercise04PageModule)
  },
  {
    path: 'exercise05',
    loadChildren: () => import('./pages/exercise05/exercise05.module').then( m => m.Exercise05PageModule)
  },
  {
    path: 'exercise06',
    loadChildren: () => import('./pages/exercise06/exercise06.module').then( m => m.Exercise06PageModule)
  },
  {
    path: 'exercise07',
    loadChildren: () => import('./pages/exercise07/exercise07.module').then( m => m.Exercise07PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
