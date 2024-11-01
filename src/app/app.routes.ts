import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { AgendamientosComponent } from './agendamientos/agendamientos.component';

export const routes: Routes = [
  { path: 'practices', component: PracticesComponent },
  {
    path: 'postulaciones',
    component: PostulacionesComponent
},
{
    path: 'encuentros',
    component: EncuentrosComponent
},

{
  path: 'agendamientos',
  component: AgendamientosComponent
}

];
