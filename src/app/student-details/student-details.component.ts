import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Para usar [(ngModel)] con el input
import { InputTextModule } from 'primeng/inputtext'; // Para usar p-inputText de PrimeNG
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule,
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  Query_E =[
    {
      level_tec:'Tecnico',
      level_tecno: 'Tecnologo',
      mode_one:'Contrato de aprendizaje',
      mode_two:'Convenio',
      date_start: '15/01/2021',
      date_end: '15/08/2021',
      stade: 'Aprovado',
      stades: 'Rechazado',
      stade_three:'pendiente',
      obervation_one:'Cumple con los requisitos',
      obervation_two:'Falta firma del jefe',
    }
  ]
}
