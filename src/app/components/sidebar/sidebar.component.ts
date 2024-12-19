import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent { 
  isSidebarVisible = true;
  menus: Array<{ id: number; nombre_item: string; enlace: string; descripcion: string }> = []; // Almacena los menús del backend

  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit() {
     // Suscripción para mostrar/ocultar el sidebar
     this.sidebarService.sidebarVisible$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });

    // Llamada al servicio para obtener los menús desde el backend
    this.sidebarService.getMenus().subscribe({
      next: (response) => {
    
        // Verifica si los datos son válidos antes de asignarlos
        if (Array.isArray(response)) {
          this.menus = response; // Asigna los menús al array
         
        } else {
          console.error('Los datos recibidos no son un arreglo válido:', response);
        }
      },
      error: (error) => {
        // Mejora la depuración del error
        console.error('Error al cargar los menús:', error);
        alert('Hubo un problema al cargar los menús. Intenta nuevamente más tarde.');
      },
      complete: () => {
      }
    });
     
  }
  isActive(route: string): boolean {
    return this.router.url === route; // Comprueba si la ruta actual está activa
  }

  onNavigate(route: string): void {
    this.router.navigate([route]); // Navega a la ruta seleccionada
  }
}