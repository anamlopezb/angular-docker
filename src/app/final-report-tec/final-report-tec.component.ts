import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';  // componente para utilizar ngIf
import { FormsModule } from '@angular/forms'; //importamos para que ngmodel funcione correctamente
import { PaginatorModule } from 'primeng/paginator';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview'; // Importa el módulo

@Component({
  selector: 'app-final-report-tec',
  standalone: true,
  imports: [
    RadioButtonModule,
    TableModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    PaginatorModule,
    InputTextareaModule,
    TabViewModule
  ],
  templateUrl: './final-report-tec.component.html',
  styleUrl: './final-report-tec.component.css'
})
export class FinalReportTecComponent {
    //arreglo de id para los botones
    options = [1, 2, 3, 4, 5];

    questions = [
      { id: 1, text: 'Aplica conocimientos y procedimientos técnicos en actividades laborales, acorde a los diferentes contextos, demostrando habilidades y destrezas en las funciones asignadas, con fin de generar valor a la organización desde su rol operativo e instrumental.', answer: null },
      { id: 2, text: 'Conoce los diferentes modelos organizacionales que inciden en una estrategia comunicativa, identificando posibles modos de actuación en coherencia.', answer: null },
      { id: 3, text: 'Selecciona y transmite información de la entidad de acuerdo a las necesidades de los diversos escenarios (sociales, comerciales, organizacionales y globales), utilizando los instrumentos y canales pertinentes.', answer: null },
    ];

    interrogations = [
      { id: 1, text: 'COMUNICACIÓN: Logra expresar sus ideas de manera coherente de forma que sea fácil su entendimiento hacia los demás tanto de forma verbal como escrita', answer: null },
      { id: 2, text: 'RESPONSABILIDAD Y COMPROMISO: Es puntual en la asistencia al trabajo y con los compromisos que adquiere, y se destaca por la calidad en el trabajo diario.', answer: null },
      { id: 3, text: 'MANEJO DE LAS TIC: Facilidad para el manejo de herramientas tecnológicas e informáticas necesarias para el óptimo desarrollo de sus funciones.', answer: null },      
      { id: 4, text: 'INICIATIVA Y CREATIVIDAD: Toma la iniciativa y utiliza los recursos disponibles para alcanzar los resultados de manera innovadora.', answer: null },      
      { id: 5, text: 'TRABAJO EN EQUIPO: Facilidad para interactuar y colaborar con sus pares, fortaleciendo su proceso académico mediante un buen nivel de relacionamiento y cordialidad.', answer: null },     
      { id: 6, text: 'GESTIÓN DE LA INFORMACIÓN: Recibe, obtiene, interpreta, procesa y transmite información de distintas fuentes, de acuerdo con las necesidades específicas de una situación.', answer: null },
      { id: 7, text: 'INVESTIGACIÓN: Consulta y busca información en fuentes confiables en sus actividades.', answer: null },
      { id: 8, text: 'SEGUNDA LENGUA: Es capaz de comprender frases y expresiones de uso frecuente con áreas de experiencia que le son especialmente relevantes.', answer: null },
    ];

    selected = [
      { id: 1, text: 'Califique la adecuación y accesibilidad de la infraestructura física y material disponible para el practicante en el proceso de prácticas:', answer: null },
      { id: 2, text: 'Califique la actualidad, variedad y efectividad de los recursos y herramientas tecnológicas disponibles para el practicante durante el proceso de prácticas:', answer: null },
      { id: 3, text: 'Califique la calidad y el acceso del practicante a los recursos de investigación y desarrollo, y a las inversiones en innovación durante el proceso de prácticas:', answer: null },      
      { id: 4, text: 'Califique la calidad de la cultura y clima empresarial disponible para el practicante en términos de valores, ambiente, liderazgo y compensación:', answer: null },      
    ];


    lists = [
      { id: 1, text: 'Valor agregado al proceso productivo del área o proyecto.', answer: null },
      { id: 2, text: 'Cumplimiento de objetivos del plan establecido.', answer: null },
      { id: 3, text: 'Calidad de los resultados aportados al área o preceso.', answer: null },
      { id: 4, text: 'Desempeño en activida (tiempos, cantidad, calidad).', answer: null },
      { id: 5, text: 'Adaptación y contribución a la cultura y clima del área.', answer: null },
      { id: 6, text: 'Aprovechamiento y seguimiento de indicaciones.', answer: null },
    ];

    value: string = ''; // Valor inicial del textarea

  chooses = [
    { label: 'Muy Satisfecho', value: 'muy_satisfecho' },
    { label: 'Satisfecho', value: 'satisfecho' },
    { label: 'Medianamente satisfecho', value: 'medianamente_satisfecho' },
    { label: 'Poco satisfecho', value: 'poco_satisfecho' },
    { label: 'Insatisfecho', value: 'insatisfecho' }
  ];
  selectedChoose: string = ''; // Variable para guardar la opción seleccionada

  indicators = [
    { id: 1, text: 'Aumento de clientes activos.', answer: null },
    { id: 2, text: 'Aumento de ventas.', answer: null },
    { id: 3, text: 'Mejora de atención al cliente.', answer: null },
    { id: 4, text: 'otro.', answer: null },

  ]

  selectedOther: string = ''; // Almacena la opción seleccionada
  otherText: string = ''; // Almacena el texto ingresado para "Otras"

  operations = [
    { id: 1, text: 'Disminución de costos operativos como recursos materiales y otros insumos.', answer: null },
    { id: 2, text: 'Disminución de tiempo no productivo.', answer: null },
    { id: 3, text: 'Reducción de tiempos de procesos.', answer: null },
    { id: 4, text: 'otro.', answer: null },
  ]

  selectedDifferent: string = ''; // Almacena la opción seleccionada
  otherDifferent: string = ''; // Almacena el texto ingresado para "Otras"

  developers = [
    { id: 1, text: 'Creación de nuevos productos o servicios.', answer: null },
    { id: 2, text: 'Innovación en productos o servicios existentes.', answer: null },
    { id: 3, text: 'Adaptación de productos o servicios a cambios en la demanda del mercado.', answer: null },
    { id: 4, text: 'otro.', answer: null },
  ]

  selectedDistinct: string = ''; // Almacena la opción seleccionada
  otherDistinct: string = ''; // Almacena el texto ingresado para "Otras"

  logistics = [
    { id: 1, text: 'Cumplimiento de entregas proyectadas en productos o servicios.', answer: null },
    { id: 2, text: 'Reducción del costo logístico.', answer: null },
    { id: 3, text: 'Aumento de entregas totales de productos o servicios.', answer: null },
    { id: 4, text: 'otro.', answer: null },
  ]

  selectedManner: string = ''; // Almacena la opción seleccionada
  otherManner: string = ''; // Almacena el texto ingresado para "Otras"

  transformations = [
    { id: 1, text: 'Procesos optimizados a través de la automatización.', answer: null },
    { id: 2, text: 'Ahorro en tiempos por aplicación de herramientas digitales.', answer: null },
    { id: 3, text: 'Redacción de costos de la organización por procesos de automatización.', answer: null },
    { id: 4, text: 'otro.', answer: null },
  ]

  selectedUnaffiliated: string = ''; // Almacena la opción seleccionada
  otherUnaffiliated: string = ''; // Almacena el texto ingresado para "Otras"

  Qualities = [
    { id: 1, text: 'Aumento en el nivel de control.', answer: null },
    { id: 2, text: 'Reducción de incidentes e inconformidades.', answer: null },
    { id: 3, text: 'Mejora en auditorías o evaluaciones.', answer: null },
    { id: 4, text: 'otro.', answer: null },
  ]

  selectedEquals: string = ''; // Almacena la opción seleccionada
  otherEquals: string = ''; // Almacena el texto ingresado para "Otras"

  processes = [
    { value: 'Propuesta', label: 'Propuesta' },
    { value: 'Desarrollo(pruebas)', label: 'Desarrollo(pruebas)' },
    { value: 'Implementación', label: 'Implementación' },
    
  ];
  selectedProcess: string = ''; // Almacena la opción seleccionada
  percentages = [
    { value: 'Menos del 50%', label: 'Menos del 50%' },
    { value: '50%', label: '50%' },
    { value: '75%', label: '75%' },
    { value: '100%', label: '100%' },
  ]
  selectedPercentage: string = ''; // Almacena el porcentaje seleccionado
  
  selectedYes: string = ''; // Almacena la opción seleccionada
  selectedNo: string = ''; // Almacena la opción seleccionada
  otherYesNo: string = ''; // Almacena el texto ingresado para "Otras"

  activeTabIndex = 0; // Índice inicial de la pestaña activa

    // Cambia de pestaña
    goToTab(index: number): void {
      this.activeTabIndex = index;
    }

  
}
