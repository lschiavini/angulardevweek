import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Incidence } from '../model/incidence';

@Injectable({
    providedIn: 'root'
})
export class IncidenceService {

    constructor(private http: HttpClient) {
    }

    listIncidences(): Observable<Incidence[]> {
        const url = 'assets/incidences.json'
        return this.http.get<Incidence[]>(url);
    }
}

