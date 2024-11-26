import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormGeneralSchemeComponent } from '../form-general-scheme/form-general-scheme.component';
interface Document {
  id: number;
  requestedDocument: string; // Documento que se solicita al usuario
  name?: string;
  size?: number;
  type?: string;
  fileUrl?: string | ArrayBuffer | null; // URL o contenido del archivo cargado
}

@Component({
  selector: 'app-formalizes',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormGeneralSchemeComponent
],
  templateUrl: './formalizes.component.html',
  styleUrls: ['./formalizes.component.css'] // Cambia 'styleUrl' a 'styleUrls'
})
export class FormalizesComponent {
  documents: Document[] = [
    { id: 1, requestedDocument: 'Cédula de Identidad' },
    { id: 2, requestedDocument: 'Certificado de Estudios' },
    { id: 3, requestedDocument: 'Comprobante de Domicilio' },
  ];

  onFileUpload(event: any, document: Document) {
    const file = event.target.files[0];
    if (file) {
      document.name = file.name;
      document.size = Math.round(file.size / 1024); // tamaño en KB
      document.type = file.type;

      // Convertimos el archivo a una URL para visualizarlo
      const reader = new FileReader();
      reader.onload = () => {
        document.fileUrl = reader.result; // Guardamos la URL o contenido del archivo
        console.log(`Archivo subido para ${document.name}`);
      };
      reader.readAsDataURL(file);
    }
  }

  viewDocument(document: Document) {
    if (document.fileUrl) {
      window.open(document.fileUrl as string, '_blank'); // Abrir en una nueva pestaña
    } else {
      console.log('No hay archivo para ver');
    }
  }

  removeFile(document: Document) {
    document.name = undefined;
    document.size = undefined;
    document.type = undefined;
    document.fileUrl = null; // Quitamos el archivo asociado
    console.log('Archivo eliminado del documento');
  }

}
