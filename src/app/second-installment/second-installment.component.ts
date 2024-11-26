import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-second-installment',
  standalone: true,
  imports: [    
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    FormsModule],
  templateUrl: './second-installment.component.html',
  styleUrl: './second-installment.component.css'
})
export class SecondInstallmentComponent {
  display: boolean = false;

  // Datos de la tabla de documentación
  documentation: any[] = [
    { state: 'Pendiente', code: '12345', accions: 'Revisado', date: '2024-11-12' },
    { state: 'Aprobado', code: '67890', accions: 'Completado', date: '2024-11-10' },
    { state: 'En Progreso', code: '54321', accions: 'En revisión', date: '2024-11-14' },
  ];

  // Valor del progreso
  progressValue: number = 25;

  // Método para mostrar el formulario en el diálogo
  showDialog() {
    this.display = true;
  }

  // Método para cerrar el diálogo
  closeDialog() {
    this.display = false;
  }

  // Método para enviar el formulario
  submitForm() {
    console.log('Formulario enviado');
    this.closeDialog();  // Cierra el diálogo después de enviar
  }

  formData = {
    progressPercentage: '',
    currentActivity: '', // Añadida
    pendingActivities: '', // Añadida
    difficulties: '', // Añadida
    alignmentLevel: '', // Añadida
    activityResponse: '', // Añadida
    taskRelevance: '', // Añadida
    taskRelevanceExplanation: '', // Añadida
    supervisionLevel: '', // Añadida
    supervisionDetails: '', // Añadida
    planProgress: '', // Añadida
    scopeMaintained: '', // Añadida
    newScopeObjective: '', // Añadida
    teacherGuidance: '' // Añadida
  };

}
