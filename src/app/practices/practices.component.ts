// src/app/practices/practices.component.ts
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table'; 
import { PracticesService } from '../services/practices.service';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports:  [
    TableModule,
  ],
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css'],
})
export class PracticesComponent implements OnInit {
  practices: any[] = []; // Cambia el tipo si tienes una interfaz específica

  constructor(private practicesService: PracticesService) {}

  ngOnInit(): void {
    this.loadPractices();
  }

  async loadPractices(): Promise<void> {
    this.practices = await this.practicesService.getPractices();
  }
}
