// src/app/services/practices.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PracticesService {
  private apiUrl = 'http://localhost:3000/practices'; 

  constructor() {}

  getPractices(): Promise<any>{
    return fetch(this.apiUrl)
    .then(response => {
      return response.json();
    });
  }
}
