import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-postulaciones',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './postulaciones.component.html',
  styleUrl: './postulaciones.component.css'
})
export class PostulacionesComponent {
  applications = [
    {code: '11/072024',
      name: 'Bancolombia',
      state: 'Finalizado',
      observations: 'Inicia',
      accions: 'No se ajusta al perfil',
      statef: 'Aprobado'  
    }
          
  ]
}
