// src/app/services/practices.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PracticesService {
  constructor() {}

  getPractices(): Promise<any>{
    return fetch(environment.apiUrl + '/practices')
    .then(response => {
      return response.json();
    });
  }

  getPracticeModes(): Promise<any>{
    return fetch(environment.apiUrl + '/practice_modes')
    .then(response => {
      return response.json();
    });
  }
}
