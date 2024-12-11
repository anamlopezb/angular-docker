import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Para usar [(ngModel)] con el input
import { InputTextModule } from 'primeng/inputtext'; // Para usar p-inputText de PrimeNG
import { Router } from '@angular/router';



@Component({
  selector: 'app-teaching-consultation',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule,
  ],
  templateUrl: './teaching-consultation.component.html',
  styleUrl: './teaching-consultation.component.css'
})
export class TeachingConsultationComponent {


  Query_E =[
    {
      estudent: 'Sebastian Rojas'
    }
  ]
  constructor(private router: Router) {}
  //metodo para hacer el rediccionamiento 
  redirigir() {
    this.router.navigate(['/teaching-details']); // Cambia '/agendamientos' por la ruta deseada
  }

}
