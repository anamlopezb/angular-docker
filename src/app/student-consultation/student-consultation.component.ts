import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-consultation',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule
  ],
  templateUrl: './student-consultation.component.html',
  styleUrl: './student-consultation.component.css'
})
export class StudentConsultationComponent {

  Query_E =[
    {
      level_tec:'Tecnico',
      level_tecno: 'Tecnologo',
      date_start: '15/01/2021',
      date_end: '15/08/2021',
      stade: 'Aprovado',
      stades: 'Rechazado'
    }
  ]
  constructor(private router: Router) {}
  //metodo para hacer el rediccionamiento 
  redirigir() {
    this.router.navigate(['/student-details']); // Cambia '/agendamientos' por la ruta deseada
  }
}
