import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
  { path: 'practices', component: PracticesComponent },
  { path: 'offers', component: OffersComponent }
];
