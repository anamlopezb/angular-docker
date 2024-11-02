import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PracticesService } from '../services/practices.service';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule],
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css'],
  providers: [PracticesService]
})
export class PracticesComponent implements OnInit {
  first = 0;
  rows = 10;

  practices: any[] = []; // Cambia el tipo si tienes una interfaz específica
  constructor(private practicesService: PracticesService) { }
  ngOnInit(): void {
    this.loadPractices();
  }
  async loadPractices(): Promise<void> {
    this.practices = await this.practicesService.getPractices();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.practices ? this.first === this.practices.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.practices ? this.first === 0 : true;
  }
}