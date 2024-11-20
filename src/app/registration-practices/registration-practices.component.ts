import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PracticesService } from '../services/practices.service';

@Component({
  selector: 'app-registration-practices',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './registration-practices.component.html',
  styleUrls: ['./registration-practices.component.css']
})
export class RegistrationPracticesComponent implements OnInit {

  modalidades: any[] = [];
  selectedModalidad: any = null; // Valor inicial para mostrar "Seleccione una modalidad"
  textoModalidad: string = '';

  constructor(private practicesService: PracticesService) {}

  async ngOnInit() {
    await this.loadPracticeModes();
  }

  async loadPracticeModes() {
    try {
      this.modalidades = await this.practicesService.getPracticeModes();
    } catch (error) {
      console.error('Error al cargar las modalidades:', error);
    }
  }

  onModalidadChange(): void {
    this.textoModalidad = this.selectedModalidad?.descripcion || '';
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

