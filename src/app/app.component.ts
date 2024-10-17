import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    ButtonModule, 
    CardModule, 
    SidebarModule,
    CommonModule,
    RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-docker';
  isSidebarVisible = false;
  displacementWidth = 0;

  constructor(public router: Router){

  }

  hideSideBar(){
    this.displacementWidth = 0;
  }

  showSideBar(){
    this.isSidebarVisible = true; 
    this.displacementWidth = 20;
  }

  defineClassHiperlinkSideBarElement(url:string){
    if(this.router.url == url){
      return 'sidebar-url-selected';
    }
    return 'sidebar-urls';
  }

  defineMarginLeftOfContent(){
    if(this.isSidebarVisible){
      return '20em';
    }
    return '0em';
  }

}
