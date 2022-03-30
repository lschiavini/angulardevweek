import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region';
import { AgeGroup } from '../model/ageGroup';
import { Incidence } from '../model/incidence';
import { RegionService } from '../service/region.service';
import { IncidenceService } from '../service/incidence.service';
import { AgeGroupService } from '../service/agegroup.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.css']
})
export class IncidencesComponent implements OnInit {

  regions: Region[] = [];
  incidences_exam: Incidence[] = []
  age_group: AgeGroup[] = []
  
  readonly subscriptions = new Subscription();

  constructor(
    private regionService: RegionService,
    private incidenceService: IncidenceService,
    private ageGroupService: AgeGroupService
    ) { }

  ngOnInit(): void {
    this.listRegions();
    this.listIncidences();
    this.listAgeGroup();
  }

  private listRegions(): void {
    const subscription = this.regionService.listRegions().subscribe((regions => {
      this.regions = regions;
    }));

    this.subscriptions.add(subscription);
  }

  private listIncidences(): void{
    const subscriptionIncidences = this.incidenceService.listIncidences().subscribe((
        incidence => {this.incidences_exam = incidence
      }
    ));

    this.subscriptions.add(subscriptionIncidences);
  }

  private listAgeGroup(): void{
    const subscriptionageGroups = this.ageGroupService.listAgeGroups().subscribe(( 
      ageGroup => {this.age_group = ageGroup}
    ));

    this.subscriptions.add(subscriptionageGroups)
  }

}
