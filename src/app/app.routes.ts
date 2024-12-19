import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';  import { OffersComponent } from './offers/offers.component';
import { DocumentDownloadComponent } from './document-download/document-download.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';  import { AgendamientosComponent } from './agendamientos/agendamientos.component';
import { ManagerPracticesComponent } from './manager-practices/manager-practices.component';
import { EntregaUnoComponent } from './entrega-uno/entrega-uno.component';
import { SecondInstallmentComponent } from './second-installment/second-installment.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'practices', component: PracticesComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'encuentros', component: EncuentrosComponent },
      { path: 'agendamientos', component: AgendamientosComponent },
      { path: 'postulaciones', component: PostulacionesComponent },
      { path: 'manager-practices', component: ManagerPracticesComponent },
      { path: 'document-download', component: DocumentDownloadComponent },
    ]
  }
];
