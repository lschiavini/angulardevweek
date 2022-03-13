import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { IncidencesRoutingModule } from './incidences-routing.module';
import { IncidencesComponent } from './incidences/incidences.component';

@NgModule({
  declarations: [
    IncidencesComponent
  ],
  imports: [
    CommonModule,
    IncidencesRoutingModule,
    MatSortModule, MatCardModule
  ]
})
export class IncidencesModule { }
