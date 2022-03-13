import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidencesRoutingModule } from './incidences-routing.module';
import { IncidencesComponent } from './incidences/incidences.component';


@NgModule({
  declarations: [
    IncidencesComponent
  ],
  imports: [
    CommonModule,
    IncidencesRoutingModule
  ]
})
export class IncidencesModule { }
