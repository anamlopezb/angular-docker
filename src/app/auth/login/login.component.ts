import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}

  simulateLogin() {
    const userId = '8'; // ID quemado para pruebas
    localStorage.setItem('authToken', 'fake-token');
    localStorage.setItem('userId', userId);
  
    this.userService.getRoleByUserId(userId).then(
      (response) => {
         
        if (response && response.id) { // Usar el campo correcto
          localStorage.setItem('userRole', response.id.toString());
          this.router.navigate(['/home']);
        } else {
          console.error('El rol del usuario no está definido en la respuesta:', response);
        }
      },
      (error) => {
        console.error('Error al obtener el rol del usuario:', error);
      }
    );
  }
  
}
