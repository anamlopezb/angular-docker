import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-formalizes',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
  ],
  templateUrl: './formalizes.component.html',
  styleUrls: ['./formalizes.component.css'] // Cambia 'styleUrl' a 'styleUrls'
})
export class FormalizesComponent {

  constructor() {
    this.selectedModalidad = null; 
  }


  selectedModalidad: any;
  textoModalidad: string | null = null;

  modalidades = [
    { label: 'Seleccione una modalidad', value: null },
    { label: 'Contrato de Aprendizaje', value: 'modalidad1' },
    { label: 'Contrato Laboral', value: 'modalidad2' },
    { label: 'Convenio Interinstitucional', value: 'modalidad3' },
    { label: 'Social o Comunitaria.', value: 'modalidad4' },
  ];

  mostrarTexto() {
    switch (this.selectedModalidad) {
      case 'modalidad1':
        this.textoModalidad = 'Cuota reguladora SENA con una duración máxima de 6 meses (1080 hrs) 75% SMMLV + afiliación a ARL y EPS.';
        break;
      case 'modalidad2':
        this.textoModalidad = 'Si se encuentra laborando en una empresa y las desea validar allí.';
        break;
      case 'modalidad3':
        this.textoModalidad = 'Duración mínima de 320 horas, medio tiempo o tiempo completo, afiliación a ARL y apoyo económico.';
        break;
      case 'modalidad4':
        this.textoModalidad = 'El estudiante diseña o se vincula a un proyecto social que plantee, de manera seria y responsable, propuestas eficaces de intervención con responsabilidad social, a sectores vulnerables de la sociedad. (320 hrs).';
        break;
      default:
        this.textoModalidad = null; 
    }
  }

  onSubmit() {
    if (this.selectedModalidad && this.selectedModalidad !== null) {
      // Procesar la selección
      alert('Modalidad seleccionada: ' + this.selectedModalidad);
    } else {
      alert('Por favor, seleccione una modalidad.');
    }
  }
}
