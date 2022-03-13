import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.css']
})
export class IncidencesComponent implements OnInit {

  regions: Region[] = [];

  constructor(private regionService: RegionService) { 
    this.regions = regionService.listRegions()
  }

  ngOnInit(): void {
  }

}
