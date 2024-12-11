import { Routes } from '@angular/router';
import { PracticesComponent } from './practices/practices.component';
import { OffersComponent } from './offers/offers.component';
import { DocumentDownloadComponent } from './document-download/document-download.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { AgendamientosComponent } from './agendamientos/agendamientos.component';
import { ManagerPracticesComponent } from './manager-practices/manager-practices.component';
import { SecondInstallmentComponent } from './second-installment/second-installment.component';
import { FirstDeliveryComponent } from './first-delivery/first-delivery.component';
import { ThirdInstallmentComponent } from './third-installment/third-installment.component';
import { FinalReportTecComponent } from './final-report-tec/final-report-tec.component';
import { StudentConsultationComponent } from './student-consultation/student-consultation.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TeachingConsultationComponent } from './teaching-consultation/teaching-consultation.component';
import { TeachingDetailsComponent } from './teaching-details/teaching-details.component';

export const routes: Routes = [
  { path: 'practices', component: PracticesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'document-download', component: DocumentDownloadComponent },
  { path: 'encuentros', component: EncuentrosComponent},
  { path: 'agendamientos',  component: AgendamientosComponent},
  { path: 'postulaciones', component: PostulacionesComponent},
  { path: 'encuentros', component: EncuentrosComponent },
  { path: 'manager-practices', component: ManagerPracticesComponent},
  { path: 'first-delivery', component: FirstDeliveryComponent},
  { path: 'second-installment', component: SecondInstallmentComponent },
  { path: 'third-installment', component: ThirdInstallmentComponent},
  { path: 'final-report', component: FinalReportTecComponent},
  { path: 'student-consultation', component: StudentConsultationComponent},
  { path: 'student-details', component: StudentDetailsComponent},
  { path: 'teaching-consult', component: TeachingConsultationComponent},
  { path: 'teaching-details', component: TeachingDetailsComponent}
];
