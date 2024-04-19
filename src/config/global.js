export default {
  global: {
    componenteFormativo: 'Hecho económico ',
    descripcionCurso:
      'En el presente componente, se abordará todo lo relacionado con el hecho económico y el proceso contable, aspectos de gran importancia en la gestión de las organizaciones deportivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Hecho económico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso contable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios de la contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes legales contables',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características y objetivos de la información contable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Concepto de estados financieros y sus elementos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ingresos y gastos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Código de comercio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/122112_CFA013.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Código de Comercio',
      referencia:
        'Resolución 549 del 2020. [DIAN]. Por la cual la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales -DIAN adopta la Clasificación de Actividades Económicas CIIU Rev. 4 A.C. (2020) y sus notas explicativas, del Departamento Administrativo Nacional de Estadística - DANE, y se establecen otras clasificaciones propias de su competencia.',
      tipo: 'Resolución',
      link:
        'https://www.dian.gov.co/normatividad/Proyectosnormas/Proyecto%20Resoluci%C3%B3n%20000000%20de%2030-10-2020.pdf',
    },
    {
      tema: 'Código de Comercio',
      referencia:
        'Gardey, A. (2013). <em>Definición de código de comercio.</em> Definición de.',
      tipo: 'artículo',
      link: 'https://definicion.de/codigo-de-comercio/',
    },
  ],
  glosario: [
    {
      termino: 'Gastos',
      significado:
        'los gastos son decrementos en los beneficios económicos producidos a lo largo del periodo contable, bien en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos, lo que da como resultado decrementos en el patrimonio y no están asociados con la adquisición o producción de bienes o la prestación de servicios, vendidos, ni con las distribuciones realizadas a los propietarios de este patrimonio.',
    },
    {
      termino: 'Costos',
      significado:
        'los costos son decrementos en los beneficios económicos producidos a lo largo del periodo contable, que están asociados con la adquisición o producción de bienes y la prestación de servicios, vendidos, y que dan como resultado decrementos en el patrimonio.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'es la diferencia entre los activos (total de bienes) y los pasivos (total de obligaciones). Representa los derechos que los propietarios de la organización tienen sobre los activos.',
    },
    {
      termino: 'Activos',
      significado:
        'representan recursos controlados por la empresa, producto de sucesos pasados, de los cuales se espera obtener beneficios económicos futuros. ',
    },
    {
      termino: 'Pasivos',
      significado:
        'es una obligación presente, producto de sucesos pasados, para cuya cancelación, una vez vencida, la empresa espera desprenderse de recursos que incorporan beneficios económicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcarria, J. (2012). <em>Introducción a la Contabilidad.</em> Universidad Jaume I.',
      link: '',
    },
    {
      referencia: 'Función Pública. (s.f.). Gestor Normativo.',
      link: 'https://www.funcionpublica.gov.co/web/eva/gestor-normativo',
    },
    {
      referencia:
        'Fowler (1994), E. (1994). <em>Contabilidad básica.</em> La Ley.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2015). Marco Conceptual para la preparación y presentación Información Financiera de las Entidades de Gobierno (pp. 9-10).',
      link:
        'https://www.minhacienda.gov.co/webcenter/ShowProperty?nodeId=%2FConexionContent%2FWCC_CLUSTER-058115%2F%2FidcPrimaryFile&revision=latestreleased',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto temático',
          centro: 'Centro de servicios de salud- Regional Antioquia',
        },
        {
          nombre: 'Tatiana Cristina Vargas',
          cargo: 'Instructora',
          centro: 'Centro de servicios de salud- Regional Antioquia',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseño instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología- Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
