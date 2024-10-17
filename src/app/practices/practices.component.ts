import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports: [ 
    TableModule],
  templateUrl: './practices.component.html',
  styleUrl: './practices.component.css'
})
export class PracticesComponent {
  products = [
    {code: '007', name: 'agente', category: 'papitas', quantity: 6}
  ]
}
