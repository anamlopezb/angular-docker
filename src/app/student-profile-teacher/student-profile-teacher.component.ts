import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile-teacher',
  templateUrl: './student-profile-teacher.component.html',
  styleUrls: ['./student-profile-teacher.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule, 
    ButtonModule, 
  ],
})
export class StudentProfileTeacherComponent {
  student: any;
  deliveries: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.loadStudentData(studentId);
    this.loadDeliveriesData(studentId);
  }

  // Método para cargar los datos del estudiante
  loadStudentData(id: string | null) {
    const students = [
      { id: 1, name: 'Ana López', level: 'Tecnico', status: 'Activo' },
      { id: 2, name: 'Carlos Pérez', level: 'Tecnologo', status: 'Inactivo' },
    ];

    this.student = students.find((student) => student.id.toString() === id);
  }

  // Método para cargar las entregas del estudiante
  loadDeliveriesData(studentId: string | null) {
    // Simular datos de entregas
    this.deliveries = [
      { document: 'Trabajo Final', status: 'Pendiente', observations: '' },
      { document: 'Ensayo', status: 'Aprobado', observations: 'Bien estructurado' },
      { document: 'Informe', status: 'Desaprobado', observations: 'Faltan detalles' },
    ];
  }

  // Métodos para manejar las acciones
  approveDelivery(delivery: any) {
    delivery.status = 'Aprobado';
    alert(`Se ha aprobado la entrega: ${delivery.document}`);
  }

  rejectDelivery(delivery: any) {
    delivery.status = 'Desaprobado';
    alert(`Se ha desaprobado la entrega: ${delivery.document}`);
  }

  viewDocument(delivery: any) {
    // Simula la visualización del documento en una nueva pestaña o modal
    if (delivery.documentUrl) {
      window.open(delivery.documentUrl, '_blank'); // Abre el documento en una nueva pestaña
    } else {
      alert('No se encontró el documento para visualizar.');
    }
  }
  
  downloadDocument(delivery: any) {
    // Simula la descarga del documento
    if (delivery.documentUrl) {
      const link = document.createElement('a');
      link.href = delivery.documentUrl;
      link.download = delivery.document; // Nombre del archivo
      link.click();
    } else {
      alert('No se encontró el documento para descargar.');
    }
  }
  
}
