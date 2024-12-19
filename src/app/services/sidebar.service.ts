import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
   // Control de visibilidad del sidebar
   private sidebarVisibleSource = new BehaviorSubject<boolean>(true);
   sidebarVisible$ = this.sidebarVisibleSource.asObservable();
 
   constructor() {}   
 
   // Método para alternar la visibilidad del sidebar
   toggleSidebar() {
     const currentState = this.sidebarVisibleSource.value;
     this.sidebarVisibleSource.next(!currentState);
   }
 
   // Método para establecer manualmente la visibilidad del sidebar
   setSidebarVisibility(isVisible: boolean) {
     this.sidebarVisibleSource.next(isVisible);
   }
 
   // Método para obtener los menús desde el backend // Fetch menus from backend
   getMenus(): Observable<Array<{ id: number; nombre_item: string; enlace: string; descripcion: string }>> {
    return new Observable(observer => {
      // Obtener el ID del rol desde localStorage
      const userRoleId = localStorage.getItem('userRole'); 
  
      // Verificar si el rol está presente
      if (!userRoleId) {
        observer.error('No se ha encontrado el rol del usuario en localStorage');
        return;
      }
  
      // Construir la URL con el ID del rol
      const url = `${environment.apiUrl}/roles/${userRoleId}/menuitems`;
  
      // Hacer la solicitud a la API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data); // Emitir los menús obtenidos
          observer.complete();
        })
        .catch(error => {
          observer.error('Error al cargar los menús: ' + error); // Manejo de errores
        });
    });
  }
 
}

