import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offers',
  standalone: true,
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  imports: [CommonModule, TableModule, DialogModule, ButtonModule, DropdownModule, FormsModule]
})
export class OffersComponent {
  offers = [
    { level: 'Tecnico', mode: 'Presencial', company: 'Tech Corp', startDate: '2023-01-15', endDate: '2023-06-15', status: 'Activo' },
    // Más datos de ejemplo asdasdsadadasasdasadsad
  ];

  displayResumeForm = false; // Controla la visibilidad del formulario de hoja de vida
  userData = {
    fullName: 'Juan Pérez',
    idNumber: '123456789',
    email: 'juan.perez@example.com'
  };
  resumeForm = {
    contactNumber: '',
    address: '',
    employmentType: '',
    jobProfile: ''
  };

  employmentOptions = [
    { label: 'Contrato de aprendizaje', value: 'Contrato de aprendizaje' },
    { label: 'Convenio', value: 'Convenio' },
    { label: 'Emprendimiento', value: 'Emprendimiento' }
  ];

  // Métodos para mostrar y ocultar el formulario
  showResumeForm() {
    this.displayResumeForm = true;
  }

  resetForm() {
    this.displayResumeForm = false;
    this.resumeForm = {
      contactNumber: '',
      address: '',
      employmentType: '',
      jobProfile: ''
    };
  }

  onSubmit() {
    console.log('Formulario enviado', this.resumeForm);
    this.resetForm();
  }
}

