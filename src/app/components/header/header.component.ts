import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    SidebarModule,
    CommonModule,
    ToastModule,
    MenuModule,
    StepsModule,
    DropdownModule,
    MenubarModule,
    AvatarModule,
    BadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileView = false;

  constructor(private sidebarService: SidebarService, public router: Router) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    this.sidebarService.setSidebarVisibility(!this.isMobileView);
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
