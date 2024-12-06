import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegación
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-management-teacher',
  standalone: true,
  templateUrl: './student-management-teacher.component.html',
  styleUrls: ['./student-management-teacher.component.css'],
  imports: [CommonModule, TableModule, DialogModule, ButtonModule, FormsModule]
})
export class StudentManagementTeacherComponent {
  students = [
    { id: 1, name: 'Ana López', level: 'Básico', status: 'Activo', details: 'Matriculada', progress: 75 },
    { id: 2, name: 'Carlos Pérez', level: 'Intermedio', status: 'Inactivo', details: 'Suspendido', progress: 40 },
    // Más datos de ejemplo
  ];

  displayGradeForm = false;
  selectedStudent: any = null;

  gradeForm = {
    grade: ''
  };

  constructor(private router: Router) {} // Inyectar el servicio Router

  // Método para mostrar la vista de detalle del estudiante
  viewStudentDetail(student: any) {
    this.router.navigate(['/student-profile-teacher', student.id]); // Navegación hacia la nueva vista
  }
  

  assignGrade(student: any) {
    this.selectedStudent = student;
    this.displayGradeForm = true;
  }

  resetGradeForm() {
    this.displayGradeForm = false;
    this.gradeForm = {
      grade: ''
    };
  }

  submitGrade() {
    if (!this.gradeForm.grade) {
      alert('Por favor, ingrese una nota válida.');
      return;
    }

    console.log(`Nota asignada a ${this.selectedStudent.name}: ${this.gradeForm.grade}`);
    this.resetGradeForm();
  }
}
