import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FinalReportTecComponent } from '../final-report-tec/final-report-tec.component';
@Component({
  selector: 'app-third-installment',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    DialogModule,
    FinalReportTecComponent
  ],
  templateUrl: './third-installment.component.html',
  styleUrl: './third-installment.component.css'
})
export class ThirdInstallmentComponent {
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

  constructor(private router: Router) {}
  //metodo para hacer el rediccionamiento 
  redirigir() {
    this.router.navigate(['/final-report']); // Cambia '/agendamientos' por la ruta deseada
  }
  //variable para Q FUNCIONE EL ABRIR Y CERRAR LA VENTANA EMERGENTE 
  visible: boolean = false;
  //METODO PARA ABRIR Y CERRAR LAS VENTANAS EMERGENTES DE LOS FORMULARIOS
  abrirDialogo() {
    this.visible = true;
  }
  //CERRAR VENTANA
  cerrarDialogo() {
    this.visible = false;
  }
}
