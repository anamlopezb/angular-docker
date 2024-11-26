import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [CardModule, ProgressBarModule],
  templateUrl: './closing.component.html',
  styleUrl: './closing.component.css'
})
export class ClosingComponent {
  headerData = {
    level: 'Nivel 1',
    company: 'Empresa XYZ',
    mode: 'Presencial',
    startDate: '01-01-2024',
    teacher: 'Juan Pérez',
    status: 'Activo',
    progress: 50, // Valor de la barra de progreso
    note: '4,5'
  };

  constructor() { }

  ngOnInit(): void {
  }


}
