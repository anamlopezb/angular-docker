import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile-teacher',
  templateUrl: './student-profile-teacher.component.html',
  styleUrls: ['./student-profile-teacher.component.css']
})
export class StudentProfileTeacherComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.loadStudentData(studentId);
  }

  // Método para cargar los datos del estudiante (simulado por ahora)
  loadStudentData(id: string | null) {
    const students = [
      { id: 1, name: 'Ana López', level: 'Básico', status: 'Activo', details: 'Matriculada', progress: 75 },
      { id: 2, name: 'Carlos Pérez', level: 'Intermedio', status: 'Inactivo', details: 'Suspendido', progress: 40 },
    ];

    this.student = students.find(student => student.id.toString() === id);
  }
}
