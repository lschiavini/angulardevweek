import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeGroup } from '../model/ageGroup';

@Injectable({
    providedIn: 'root'
})
export class AgeGroupService {

    constructor(private http: HttpClient) {
    }

    listAgeGroups(): Observable<AgeGroup[]> {
        // const url = 'assets/ageGroup.json';
        const url = 'api/agegroup';
        return this.http.get<AgeGroup[]>(url);
    }
}

