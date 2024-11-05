import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';
import { OffersComponent } from './offers/offers.component';
import { DocumentDownloadComponent } from './document-download/document-download.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { AgendamientosComponent } from './agendamientos/agendamientos.component';
import { ManagerPracticesComponent } from './manager-practices/manager-practices.component';

export const routes: Routes = [
  { path: 'practices', component: PracticesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'document-download', component: DocumentDownloadComponent },
  { path: 'encuentros', component: EncuentrosComponent},
  { path: 'agendamientos',  component: AgendamientosComponent},
  { path: 'postulaciones', component: PostulacionesComponent},
  { path: 'encuentros', component: EncuentrosComponent },
  { path: 'manager-practices', component: ManagerPracticesComponent}

];
