import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-entrega-uno',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule
  ],
  templateUrl: './entrega-uno.component.html',
  styleUrl: './entrega-uno.component.css'
})
export class EntregaUnoComponent {
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