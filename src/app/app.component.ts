import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    SidebarModule,
    CommonModule,
    RouterOutlet,
    ToastModule,
    MenuModule,
    StepsModule,
    DropdownModule,
    MenubarModule,
    AvatarModule,
    BadgeModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent {
  title = 'angular-docker';
  isSidebarVisible = true; // Barra lateral visible por defecto
  isMobileView = false; // Para controlar la vista móvil
  isNotificationsVisible = false; // Para controlar la visibilidad del menú de notificaciones

  notifications = [
    { severity: 'success', summary: 'Éxito', detail: 'Notificación 1: Operación exitosa.' },
    { severity: 'info', summary: 'Información', detail: 'Notificación 2: Aquí hay información importante.' },
    { severity: 'warn', summary: 'Advertencia', detail: 'Notificación 3: Advertencia sobre una operación.' },
    { severity: 'error', summary: 'Error', detail: 'Notificación 4: Ocurrió un error.' },
  ];

  unreadCount = this.notifications.length; // Contador de notificaciones no leídas

  constructor(public router: Router, private messageService: MessageService) {
    this.checkScreenSize();
  }
     
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    this.isSidebarVisible = !this.isMobileView;
  }

  defineClassHiperlinkSideBarElement(url: string) {
    return this.router.url === url ? 'sidebar-url-selected' : 'sidebar-urls';
  }

  defineMarginLeftOfContent() {
    return this.isSidebarVisible ? '20em' : '0em';
  }

  showNotifications() {
    this.notifications.forEach(notification => {
      this.messageService.add(notification);
    });
    this.resetNotifications(); // Reinicia el contador de notificaciones
  }

  resetNotifications() {
    this.unreadCount = 0; // Establece el contador de notificaciones no leídas a cero
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  isActive(route: string): boolean {
    return this.router.url === route; // Activa la clase 'active' para la ruta actual
  }

  toggleNotifications() {
    this.isNotificationsVisible = !this.isNotificationsVisible; 
  }

  
// Función para marcar una notificación como leída
markAsRead(notification: any) {
  notification.isRead = true; // Marcar la notificación como leída
  this.unreadCount--; // Reducir el contador de notificaciones no leídas
}

}
