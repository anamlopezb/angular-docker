import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-document-download',
  standalone: true,
  imports: [TableModule, ButtonModule], 
  templateUrl: './document-download.component.html',
  styleUrls: ['./document-download.component.css']
})
export class DocumentDownloadComponent {
  documents = [
    { name: 'Documento 1', url: 'assets/docs/documento1.pdf' },
    { name: 'Documento 2', url: 'assets/docs/documento2.pdf' },
    // Agrega más documentos según sea necesario
  ];

  viewDocument(url: string) {
    window.open(url, '_blank'); // Abre el PDF en una nueva pestaña
  }

  downloadDocument(url: string, name: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
  }
}
