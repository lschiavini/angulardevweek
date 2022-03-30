import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {
    
  }

  listRegions() : Observable<Region[]>{
    // const url = 'assets/regions.json';
    const url = 'api/region';
    return this.http.get<Region[]>(url);
  }
}
