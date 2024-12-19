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
  selector: 'app-teaching-details',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule,
  ],
  templateUrl: './teaching-details.component.html',
  styleUrl: './teaching-details.component.css'
})
export class TeachingDetailsComponent {
  Query_E =[
    {
      estudent: 'Sebastian Rojas',
      level_tec:'Tecnico',
      level_tecno: 'Tecnologo',
      date_start: '15/01/2021',
      date_end: '15/08/2021',
      stade: 'Aprovado',
      stades: 'Rechazado',
      mode_one: 'Contrato de aprendizaje',
      mode_two: 'Convenio',
    }
  ]

}
