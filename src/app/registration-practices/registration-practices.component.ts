import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-registration-practices',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './registration-practices.component.html',
  styleUrls: ['./registration-practices.component.css']
})
export class RegistrationPracticesComponent implements OnInit {
  // Opciones de sector
  sectorOptions = [
    { label: 'Primario', value: 'primario' },
    { label: 'Secundario', value: 'secundario' },
    { label: 'Terciario', value: 'terciario' }
  ];

  lineOptions = [
    { label: 'Gestión Comercial', value: 'comercial' },
    { label: 'Productividad Operacional', value: 'productividad' },
    { label: 'Desarrollo y sofisticación de Producto o servicios', value: 'desarrollo' },
    { label: 'Logística', value: 'logistica' },
    { label: 'Transformación digital', value: 'digital' },
    { label: 'Gestión de calidad', value: 'calidad' }
  ];

  // Opciones de indicadores
  indicatorOptions: Array<{ label: string; value: string }> = [];
  selectedLine: string = '';
  selectedIndicator: string = '';

  // Complemento para la línea de intervención
  lineComplement: string = '';

  // Opciones de subsector
  subSectorOptions: Array<{ label: string; value: string }> = [];

  // Variables para el sector y subsector seleccionados
  selectedSector: string = '';
  selectedSubSector: string = '';
  

  // Método de ciclo de vida OnInit
  ngOnInit(): void {
  }

  // Método para actualizar las opciones de subsector según el sector seleccionado
  updateSubSectorOptions() {
    switch (this.selectedSector) {
      case 'primario':
        this.subSectorOptions = [
          { label: 'Agricultura', value: 'agricultura' },
          { label: 'Ganadería', value: 'ganaderia' },
          { label: 'Minería', value: 'mineria' }
        ];
        break;
      case 'secundario':
        this.subSectorOptions = [
          { label: 'Industria', value: 'industria' },
          { label: 'Alimentos', value: 'alimentos' },
          { label: 'Automotor', value: 'automotor' }
        ];
        break;
      case 'terciario':
        this.subSectorOptions = [
          { label: 'Comercio', value: 'comercio' },
          { label: 'Administrativo', value: 'administrativo' },
          { label: 'Financiero', value: 'financiero' },
          { label: 'Salud', value: 'salud' }
        ];
        break;
      default:
        this.subSectorOptions = []; // Si no se selecciona ningún sector
        break;
    }
  }

  // Método para actualizar las opciones de indicadores dependiendo de la línea seleccionada  
  updateIndicatorOptions() {
    switch (this.selectedLine) {
      case 'comercial':
        this.indicatorOptions = [
          { label: 'Aumento de clientes activos', value: 'clientes_activos' },
          { label: 'Aumento de ventas', value: 'aumento_ventas' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement = 'Implementación de estrategias de atracción y fidelización de clientes. Mejorar el posicionamiento de la empresa y aumentar su posicionamiento en el mercado.';
        break;
      case 'productividad':
        this.indicatorOptions = [
          { label: 'Disminución de costos operativos como recursos, materiales y otros insumos.', value: 'disminucion_costos' },
          { label: 'Disminución de tiempo no productivo', value: 'disminucion_tiempo' },
          { label: 'Reducción de tiempos de procesos.', value: 'reduccion_tiempo' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement = 'Optimización continua de procesos para maximizar la eficiencia, eliminando actividades redundantes y mejorando la utilización de recursos para incrementar la productividad.';
        break;
      case 'desarrollo':
        this.indicatorOptions = [
          { label: 'Creación de nuevos productos o servicios.', value: 'nuevos_productos' },
          { label: 'Innovación en productos o servicios existentes.', value: 'innovacion' },
          { label: 'Adaptación de productos o servicios a cambios en la demanda del mercado.', value: 'adaptacion' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement =  'Reinvención ágil de los bienes/servicios e inclusos los procesos relacionados para atender las nuevas demandas del mercado y formas de comercialización.';
        break;
      case 'logistica':
        this.indicatorOptions = [
          { label: 'Cumplimiento de entregas proyectadas en productos o servicios.', value: 'cumplimiento_entregas' },
          { label: 'Reducción del costo logístico.', value: 'reduccion_costos' },
          { label: 'Aumento de entregas totales de productos o servicios.', value: 'aumento_entregas' },
          { label: 'Costos logísticos', value: 'costos_logisticos' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement =  'Mejorar el desempeño de la empresa a través de la optimización de sus costos logísticos, la precisión en sus tiempos de entrega y la calidad en la entrega de sus productos como estrategia para afrontar momentos de crisis.';
        break;
      case 'digital':
        this.indicatorOptions = [
          { label: 'Procesos optimizados a través de la automatización.', value: 'optimizacion' },
          { label: 'Ahorro en tiempos por aplicación de herramientas digitales.', value: 'ahorro_tiempo' },
          { label: 'Reducción de costos de la organización por procesos de automatización.', value: 'reduccion_costos' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement = 'Mejorar el desempeño de la empresa a través de la optimización de sus costos logísticos, la precisión en sus tiempos de entrega y la calidad en la entrega de sus productos como estrategia para afrontar momentos de crisis.Uso efectivo de la tecnología, manteniendo la funcionalidad de los procesos críticos de una organización en momentos de crisis, optimizando tiempos de proceso internos y mejorando la experiencia de clientes.';
        break;
      case 'calidad':
        this.indicatorOptions = [
          { label: 'Aumento en el nivel de control.', value: 'nivel_control' },
          { label: 'Reducción de incidentes e inconformidades.', value: 'reduccion_incidentes' },
          { label: 'Mejora en auditorías o evaluaciones.', value: 'mejora_auditorias' },
          { label: 'No aplica', value: 'no_aplica' }
        ];
        this.lineComplement = 'Implementación de estándares de calidad en procesos y/o productos o servicios.'
        break;
      default:
        this.indicatorOptions = []; 
        this.lineComplement = '';
        break;
    }
    // Limpiar subsector seleccionado si el sector cambia
    this.selectedSubSector = '';
  }

  get labelValue(): string {
    const selectedLineOption = this.lineOptions.find(option => option.value === this.selectedLine);
    return selectedLineOption ? selectedLineOption.label : '';
  }


onSubmit() {
 
}
}

