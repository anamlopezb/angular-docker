import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-first-delivery',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule
  ],
  templateUrl: './first-delivery.component.html',
  styleUrl: './first-delivery.component.css'
})
export class FirstDeliveryComponent {
    documentation = [
      //datos quemados
      {code: '11/07/2024',
        name: '',
        state: 'Pendiente',
        observations: 'Inicia',
        accions: 'No se ajusta al perfil',
        statef: 'Aprobado',
        stated: 'Adjuntado',
        statel: 'Rechazado',  
        hora: '2:00pm'
      }
            
    ]
  
}
