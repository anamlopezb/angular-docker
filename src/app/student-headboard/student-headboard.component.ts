import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


interface HeaderInfo {
  level: string;
  company: string;
  mode: string;
  startDate: string;
  teacher: string;
  status: string;
}

@Component({
  selector: 'app-student-headboard',
  standalone: true,
  imports: [ 
    CardModule,
    DividerModule],
  templateUrl: './student-headboard.component.html',
  styleUrl: './student-headboard.component.css'
})
export class StudentHeadboardComponent {
  headerData: HeaderInfo = {
    level: 'Tecnológo',
    company: 'Bancolombia',
    mode: 'Contrato de Aprendizaje',
    startDate: '05/08/2024',
    teacher: 'Andrea Torres',
    status: 'En Proceso'
  };

}
