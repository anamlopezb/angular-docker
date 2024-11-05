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
  isSidebarVisible = true; // Sidebar is visible by default
  isMobileView = false; // To control mobile view
  isNotificationsVisible = false; // To control notifications menu visibility

  notifications = [
    { severity: 'success', summary: 'Éxito: Operación exitosa.', isRead: false },
    { severity: 'info', summary: 'Información: Aquí hay información importante.', isRead: false },
    { severity: 'warn', summary: 'Advertencia: Advertencia sobre una operación.', isRead: false },
    { severity: 'error', summary: 'Error: Ocurrió un error.', isRead: false },
  ];

  unreadCount = this.notifications.filter(n => !n.isRead).length; // Unread notifications counter

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

  showNotifications() {
    this.notifications.forEach(notification => {
      this.messageService.add(notification);
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  isActive(route: string): boolean {
    return this.router.url === route; // Activate 'active' class for the current route
  }

  toggleNotifications() {
    this.isNotificationsVisible = !this.isNotificationsVisible; 
    if (this.isNotificationsVisible) {
        // Mostrar las notificaciones aquí (opcional si ya se están mostrando en el HTML)
    }
}

  markAsRead(notification: any) {
    notification.isRead = true; // Mark notification as read
    this.unreadCount--; // Decrease unread notifications count
  }
}