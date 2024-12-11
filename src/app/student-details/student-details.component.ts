import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  Query_E =[
    {
      level_tec:'Tecnico',
      level_tecno: 'Tecnologo',
      date_start: '15/01/2021',
      date_end: '15/08/2021',
      stade: 'Aprovado',
      stades: 'Rechazado',
      stades_three:'Pendiente',
      observation_one:'Cumple con los requisitos',
      observation_two:'Falta firma de jefe',
      observation_three: 'Pendiente'
    }
  ]
}
