import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { FormalizesComponent } from '../formalizes/formalizes.component';
import { RegistrationPracticesComponent } from '../registration-practices/registration-practices.component';
<<<<<<< HEAD
import { EntregaUnoComponent } from '../entrega-uno/entrega-uno.component'; // Importa el componente
import { SecondInstallmentComponent } from '../second-installment/second-installment.component';

=======
import { ClosingComponent } from "../closing/closing.component";
import { FormGeneralSchemeComponent } from "../form-general-scheme/form-general-scheme.component";
>>>>>>> cd369bdeb01c9a5d1b8898e8981469a2e5a1e24e

interface StepItem {
  label: string;
  content: string;
}

@Component({
  selector: 'app-manager-practices',
  standalone: true,
  imports: [
    StepsModule,
    FormalizesComponent,
    CommonModule,
    RegistrationPracticesComponent,
    StepperModule,
    EntregaUnoComponent,
    SecondInstallmentComponent, // Agregar aquí para reconocer el componente

  ],
  templateUrl: './manager-practices.component.html',
  styleUrls: ['./manager-practices.component.css']
})
export class ManagerPracticesComponent {
  items: StepItem[] = [
    { label: 'Registra', content: 'registration' },
    { label: 'Primera Entrega', content: 'entrega-uno' },
    { label: 'Segunda Entrega', content: 'second-installment' },
    { label: 'Tercera Entrega', content: 'step3' },
    { label: 'Cierre', content: 'closing' },
  ];

  activeIndex: number = 0;

  constructor() {
    console.log("Items:", this.items);
    console.log("Índice activo inicial:", this.activeIndex);
  }

  onStepSelect(event: any) {
    this.activeIndex = event.index; // Actualiza el índice activo basado en el evento de selección
    console.log("Índice activo cambiado a:", this.activeIndex);
  }

  nextStep() {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
  }

  previousStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
