import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: 'incidences'
  },
  {
    path: 'incidences',
    loadChildren: () => import('./incidences/incidences.module').then(m => m.IncidencesModule)
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
