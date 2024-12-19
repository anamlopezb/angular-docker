import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { ContentComponent } from "../components/content/content.component";
import { Router } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, ContentComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidebarVisible = true;

  constructor(private router: Router) {}

  // Función para determinar si la ruta está activa
  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  // Función para navegar a una ruta
  onNavigate(path: string): void {
    this.router.navigate([path]);
  }
  

}
