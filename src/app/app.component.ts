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
 
}