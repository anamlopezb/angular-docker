import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';
import { OffersComponent } from './offers/offers.component';
import { DocumentDownloadComponent } from './document-download/document-download.component';

export const routes: Routes = [
  { path: 'practices', component: PracticesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'document-download', component: DocumentDownloadComponent }
];
