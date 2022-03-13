import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidencesComponent } from './incidences/incidences.component';


const routes: Routes = [
  {
    path: '',
    component: IncidencesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidencesRoutingModule { }
