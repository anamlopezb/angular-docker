import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  // componente para utilizar ngIf
import { Router } from '@angular/router';


@Component({
  selector: 'app-encuentros',
  standalone: true,
  imports: [
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './encuentros.component.html',
  styleUrl: './encuentros.component.css'
})
export class EncuentrosComponent {
//variable para el docente
  Docente ='Andrea Torres'
//arreglo para el menu desplegable
  opcions = [
    {opcion: 'Reunion Inicial'},
    {opcion: 'Reunion final'}
  ]

  
  //variable para el menu desplegable que se puede mostar aun sin haber seleccionado las opciones
  selectedopcion: any = null;

  //variable para fechas de calendario
  date?: Date;

  constructor(private router: Router) {}
  //metodo para hacer el rediccionamiento 
  redirigir() {
    this.router.navigate(['/agendamientos']); // Cambia '/agendamientos' por la ruta deseada
  }
  
  
}
