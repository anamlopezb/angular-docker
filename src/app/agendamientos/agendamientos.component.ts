import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-agendamientos',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './agendamientos.component.html',
  styleUrl: './agendamientos.component.css'
})
export class AgendamientosComponent {
  applications = [
    //datos quemados
    {code: '11/07/2024',
      name: 'Bancolombia',
      state: 'Agendado',
      observations: 'Inicia',
      accions: 'No se ajusta al perfil',
      statef: 'Aprobado',  
      hora: '2:00pm'
    }
          
  ]
}
