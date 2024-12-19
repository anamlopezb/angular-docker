import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // Obtener todos los usuarios
  getUsers(): Promise<any> {
    return fetch(`${environment.apiUrl}/users`)
      .then(response => response.json());
  }

  // Obtener un usuario por su ID
  getUserById(id: string): Promise<any> {
    return fetch(`${environment.apiUrl}/users/${id}`)
      .then(response => response.json());
  }

  // Obtener el rol de un usuario por su ID
  getRoleByUserId(id: string): Promise<any> {
    return fetch(`${environment.apiUrl}/users/${id}/role`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener el rol del usuario');
        }
        return response.json();
      });
  }
  

  // Crear un nuevo usuario
  createUser(user: any): Promise<any> {
    return fetch(`${environment.apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(response => response.json());
  }

  // Actualizar un usuario existente
  updateUser(id: string, user: any): Promise<any> {
    return fetch(`${environment.apiUrl}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(response => response.json());
  }

  // Eliminar un usuario
  deleteUser(id: string): Promise<any> {
    return fetch(`${environment.apiUrl}/users/${id}`, {
      method: 'DELETE',
    }).then(response => response.json());
  }

  // Obtener los usuarios por su rol
  getUsersByRole(roleId: string): Promise<any> {
    return fetch(`${environment.apiUrl}/users/rol/${roleId}`)
      .then(response => response.json());
  }
}
