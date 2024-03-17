<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Principios de la contabilidad
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-1.png" alt="Imagen decorativa" style="max-width: 505px" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        p(data-aos="fade-left") Los principios de la contabilidad se basan en pautas que se deben cumplir para mantener un sistema contable organizado y con la capacidad de presentar oportunamente la información real contable. Dichos principios abarcan todo el proceso contable, por lo que deben ser tenidos en cuenta en cada una de las etapas del ciclo contable con el fin de identificar, reconocer, medir y revelar los estados financieros de la empresa.
          br
          br
          |A continuación, se presentan los principios de la contabilidad.

    SlyderF(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-1.svg' style="max-width: 177px;" alt='Negocio en marcha ')
        h4.text-center.w-100(style="color: black") Negocio en marcha 
        p.text-center.mb-auto(style="color: black") La regulación contable va enfocada al negocio en funcionamiento, ya que generalmente las empresas operan bajo duración indefinida.
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-2.svg' style="max-width: 177px;" alt='Devengo')
        h4.text-center.w-100(style="color: black") Devengo
        p.text-center.mb-auto(style="color: black") Los hechos económicos se reconocen en el momento que suceden, una vez surgen los derechos u obligaciones.
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-3.svg' style="max-width: 177px;" alt='Esencia sobre forma')
        h4.text-center.w-100(style="color: black") Esencia sobre forma
        p.text-center.mb-auto(style="color: black") Los hechos económicos se reconocen atendiendo a su esencia económica, independientemente de la forma legal que las original.
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-4.svg' style="max-width: 177px;" alt='Asociación')
        h4.text-center.w-100(style="color: black") Asociación
        p.text-center.mb-auto(style="color: black") El reconocimiento de ingresos está asociado con los costos y gastos en los que incurre para producir tales ingresos.
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-5.svg' style="max-width: 177px;" alt='Uniformidad')
        h4.text-center.w-100(style="color: black") Uniformidad
        p.text-center.mb-auto(style="color: black") Se mantienen en el tiempo los mismos criterios de medición, reconocimiento, revelación y presentación, y se aplican a los estados financieros que cumplen similares características.
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema3/slyF-6.svg' style="max-width: 177px;" alt='Periodo contable')
        h4.text-center.w-100(style="color: black") Periodo contable
        p.text-center.mb-auto(style="color: black") Es el tiempo máximo en el que la empresa mide los resultados de sus hechos económicos y el patrimonio bajo su control (1 de enero a 31 de diciembre).
    Separador
    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1 Componentes legales contables
    
    p.mb-5 En Colombia, el marco legal contable, a través de la historia, ha tenido varias leyes y decretos. A continuación, se mencionan los principales: 

    PasosA.col-xl-10.mx-auto.color-primario(tipo="n")
      .row
        .col-lg.pe-lg-4.order-2.order-lg-1
          h5.fw-bold(style="color: #2D54FE") 1971
          p.fw-bold Decreto Ley 410 de 1971 Código de comercio
          p Reglamenta la obligación de llevar la contabilidad en las empresas. Asimismo, describe quién debe llevar los registros y demás requisitos contables.
        img.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src='@/assets/curso/temas/tema3/img-1.png' style="max-width: 295px" alt='Imagen decorativa')

      .row
        img.mb-4.mb-lg-auto.mx-auto(src='@/assets/curso/temas/tema3/img-2.png' style="max-width: 295px" alt='Imagen decorativa')
        .col-lg.ps-lg-4
          h5.fw-bold(style="color: #2D54FE") 1993
          p.fw-bold Decreto 2649 de 1993
          p Reglamenta la contabilidad en general y se expiden los principios o normas de contabilidad generalmente aceptados en Colombia.

      .row
        .col-lg.pe-lg-4.order-2.order-lg-1
          h5.fw-bold(style="color: #2D54FE") 2009
          p.fw-bold Ley 1314 de 2009
          p Regula los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia; se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento.
        img.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src='@/assets/curso/temas/tema3/img-3.png' style="max-width: 295px" alt='Imagen decorativa')
    
    Separador 
    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2 Características y objetivos de la información contable
    
    p El objetivo de la información contable es suministrar oportunamente la información real sobre el proceso contable y financiero a cada una de las partes interesadas. Más adelante, se abordarán dichos usuarios que pueden estar interesados en la información contable de la empresa, que se pueden clasificar como:

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.pe-lg-4.order-2.order-lg-1
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Grupo de usuarios que necesitan y emplean la información para la toma de decisiones en materia de inversión y financiación.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Grupo de usuarios que necesitan y emplean la información para procesos de planeación, ejecución, control y evaluación económica de la empresa.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Grupo de usuarios que requieren la información contable para ejercer control administrativo y/o legal.
        .cajon.color-primario.p-4(style="background-color: #E9EDFF" data-aos="fade-right")
          p.mb-0 A continuación, se presentan las características cualitativas de la información financiera descritas en el Marco Conceptual para la preparación y presentación de la información financiera de las entidades de gobierno (Ministerio de Hacienda y Crédito Público, 2015, pp. 3-5).
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-1.png" alt="Imagen decorativa" style="max-width: 505px" data-aos="fade-right")

    .d-flex.flex-wrap.mb-5.col-xl-10.mx-auto.justify-content-md-center
      .card-image.card-image-left.p-4.ms-auto.ms-md-0
        .decorador-img(data-aos="fade-right")
        h5.w-100 Características fundamentales
        ul
          li.d-flex.w-100
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Relevancia
          li.d-flex
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Representación fiel
      .card-image.card-image-right.p-4.me-auto.me-md-0
        .decorador-img(data-aos="fade-left")
        h5.w-100 Características de mejora
        ul
          li.d-flex.w-100
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Verificabilidad
          li.d-flex
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Oportunidad
          li.d-flex
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Comprensibilidad
          li.d-flex
            i.pe-2.pt-1.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Comparabilidad
    p.mb-5 Según Fowler (1994), el informe contable es el medio por el cual la información de salida del sistema contable, como lo es todo lo inherente al patrimonio, su evolución y ciertas contingencias, es comunicada a sus usuarios, quienes pueden utilizarla como uno de los elementos para la toma de decisiones económicas. Dicho informe incluye también datos no contables, es decir, que no realicen variaciones patrimoniales. A continuación, se presentan los tipos de informes contables.

    .row.justify-content-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.ps-5.py-4.pe-3.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2(style="color: black") 1
          p.mb-0 #[b Los estados financieros], o también llamados estados contables, se construyen para informar sobre aspectos contables tanto para uso interno de la empresa como para terceros como propietarios, acreedores, entes gubernamentales de fiscalización, etc. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-botones.ps-5.py-4.pe-3.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.mb-0 #[b La información adicional], es información puntual y específica requerida por ciertos usuarios específicos.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-primario.ps-5.py-4.pe-3.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.mb-0 #[b Los informes contables], son para uso de los administradores de la empresa con el fin de orientar en la toma de decisiones y control patrimonial. Un aspecto importante en la información contable es conocer los intereses de los emisores o partes interesadas destinatarias del informe. Según su interés, será el tipo de informe, su contenido y forma. 
    .d-flex.flex-wrap.mb-5
      .col-lg-6.col-xl-5.pe-lg-2
        p Además de la información contable, es fundamental conocer cuáles son los posibles interesados de esta información en una empresa: 
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Propietarios, socios.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Proveedores.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Prestamistas.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Administradores, gerentes, directores de la empresa.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Clientes, usuarios.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Asesores.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Organismos estatales de control.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Organismos de impuestos.
      img.mx-auto.mb-auto.col-2.d-none.d-xl-flex(src="@/assets/curso/temas/tema3/img-5.png" style="max-width: 190px" alt="Imagen decorativa")
      .col-lg-6.col-xl-5.ps-lg-2
        p Aunque la información es según el grupo destinatario, los estados contables deberán brindar, como mínimo, la siguiente información en el caso de receptores no gubernamentales:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Situación patrimonial.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Evolución del patrimonio en el periodo informado.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Evolución de la situación financiera.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Otra información relevante según el receptor de la información, como lo podrá ser: información de la actividad económica, criterios de medición, incertidumbre.
        p En el caso de que los receptores de la información sean entes gubernamentales, esta es la información requerida:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Cómo fueron obtenidos y empleados los recursos.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Cumplimiento de requerimientos legales y contractuales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A continuación, puede observar, los tres elementos que Fowler (1994), propone incluir en la información contable:
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3.
      span  #[i  Elementos que se pueden incluir en la información contable]

    img.mx-auto.col-xl-10(src="@/assets/curso/temas/tema3/img-6.svg" style="max-width: 990px" alt="En la Figura 3 se presentan los elementos propuestos para incluir en la información contable, los cuales abarcan la situación patrimonial, evolución patrimonial y evolución financiera.")

    Separador 
    #t_3_3.titulo-segundo.color-acento-botones
      h2 3.3 Concepto de estados financieros y sus elementos
    
    p.mb-5 Como se mencionó anteriormente, los estados financieros tienen el fin de informar aspectos contables de la empresa y deben evidenciar los siguientes elementos:

    .row.justify-content-center.mb-5
      .col-xl-6.col-xxl-5.col-lg-8.col-12.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-7.png", alt="Imagen decorativa Relacionados con la situación financiera de la empresa")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Relacionados con la situación financiera de la empresa
            ul.mb-0.mbo
              li
              li.d-flex.justify-content-center.align-content-center
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right" style="color: white")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Activos
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right" style="color: white")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Pasivos
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right" style="color: white")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Patrimonio

      .col-xl-6.col-xxl-5.col-lg-8.col-12.mb-4.mb-xl-0(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-8.png", alt="Imagen decorativa Relacionados con el rendimiento financiero")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Relacionados con el rendimiento financiero
            ul.mb-0.mbo
              li
              li.d-flex.justify-content-center.align-content-center
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Ingresos
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Gastos
                p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
                  i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
                  | Costos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Dichos elementos, que conforman los estados financieros, serán descritos a continuación: 

    TabsA.color-acento-contenido
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Activos")
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          p Activo, según Fowler, es un bien, denominado objeto material o inmaterial, que representa valor para la empresa, ya que puede ser canjeado por dinero o por otro activo, o tiene la capacidad de emplearse en una actividad productiva en la organización. Es decir, tiene valor si representa dinero o tiene la capacidad de generarlo, y se deben tener en cuenta los siguientes aspectos:
          ul.mb-0.ps-4
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Solo se reconocen activos cuando se les puede asignar una medición objetiva y confiable.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Costo histórico.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Costo de reposición.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Precio del activo en una transacción en el mercado.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Depreciación en el tiempo.
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema3/img-9.png", alt="Imagen decorativa" style="max-width: 330px")
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Clasificación de los activos")
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          p.fw-bold(style="color: #FE502D") Los activos pueden clasificarse en:
          ul.mb-0.ps-4
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | #[b Activos corrientes:] dinero y otros activos que se espera convertir en dinero en el tiempo, como mercaderías de la organización que se venderán.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | #[b Activos no corrientes:] máquinas, herramientas u otros elementos empleados para la producción de la empresa.
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema3/img-10.png", alt="Imagen decorativa" style="max-width: 330px")
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Pasivos (obligaciones)")
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          p Según Fowler, una empresa tiene un pasivo cuando, debido a un hecho o una transacción, se encuentra obligado a entregar activos (dinero u otros bienes) o prestar servicios (físicos o jurídicos), como lo pueden ser:
          ul.mb-0.ps-4
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Obligaciones legales.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Obligaciones contractuales.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Impuestos.
            li
              p.mb-0(data-aos="fade-right")
                i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
                | Políticas en el sector en el que se desenvuelva.
          p.mb-0 La cancelación del pasivo se podrá dar cuando se entrega dinero, otro bien o servicio, se reemplaza por otro pasivo, se acuerda con el acreedor la conversión de la deuda en capital, el acreedor condona o el deudor se libera de la obligación debido a la inacción del acreedor en el transcurso del tiempo.
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema3/img-11.png", alt="Imagen decorativa" style="max-width: 330px")
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Clasificación de los pasivos")
        p.fw-bold(style="color: #FE502D") Obligaciones generadas por contingencias
        ul.ps-4
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos contingentes:] obligaciones por reparación y/o garantía de productos o servicios otorgados.
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos no contingentes:] obligaciones con los proveedores por la adquisición y recepción satisfactoria de bienes.
        p.fw-bold(style="color: #FE502D") Según la forma de cancelación de la obligación
        ul.ps-4
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos cancelables mediante la entrega de bienes:] anticipo o forma de pago a un cliente mediante la entrega de un bien de la empresa.
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos cancelables mediante la prestación de servicios:] anticipo o forma de pago a través de un servicio prestado por parte de la empresa.
        p.fw-bold(style="color: #FE502D") Según el plazo de cancelación de la obligación 
        ul.ps-4
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos corrientes: ya vencidos o a vencer dentro del año siguiente:] una factura a corto plazo vencida por un servicio ya recibido.
          li
            p.mb-0(data-aos="fade-right")
              i.fas.fa-circle.pe-2(style="color: #FE502D; font-size: 6px")
              | #[b Pasivos no corrientes:] una cuota de un préstamo ya recibido que vence en un plazo determinado.
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Patrimonio")
        .col-xl-7.order-2.order-xl-1.pe-xl-4
          p El patrimonio, según Fowler, es la diferencia entre los activos (total de bienes) y los pasivos (total de obligaciones). Cuando sucede un hecho económico, afectará el patrimonio de la empresa (positiva o negativamente), por lo que su información deberá quedar registrada en el libro contable y, asimismo, se deberá evidenciar con un documento que lo acredite, como factura, recibo, letra de cambio, etc.

          p Además, cada hecho económico deberá indicar de dónde provienen los recursos y qué destino tendrán. Deberá dar claridad si es un costo, gasto, activo o pasivo. Por consiguiente, una adecuada gestión de los hechos económicos en una empresa permitirá llevar una información contable ajustada a la realidad.
        img.mx-auto.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto(src="@/assets/curso/temas/tema3/img-12.png", alt="Imagen decorativa" style="max-width: 330px")

    Separador 
    #t_3_4.titulo-segundo.color-acento-botones
      h2 3.4 Ingresos, gastos y costos
    
    p.mb-5 Las organizaciones, durante su periodo contable, presentan ingresos, gastos y costos, los cuales, de acuerdo con su equilibrio, incidirán directamente en el patrimonio de la empresa. A continuación, se presentan algunas definiciones aportadas por el marco conceptual para la preparación y presentación de la información financiera del Ministerio de Hacienda de Colombia:

    .row.justify-content-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.ps-5.py-4.pe-3.d-flex.flex-wrap.align-items-center
          p.fw-bold Ingresos
          p.mb-0 Los ingresos son los incrementos en los beneficios económicos o en el potencial de servicio producidos a lo largo del periodo contable, bien en forma de entradas o incrementos de valor de los activos, o bien como salidas o decrementos de los pasivos, que dan como resultado aumentos del patrimonio y no están relacionados con los aportes para la creación de la entidad (Ministerio de Hacienda y Crédito Público,2015, p.9).
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-botones.ps-5.py-4.pe-3.d-flex.flex-wrap.align-items-center
          p.fw-bold Gastos
          p.mb-0 Los gastos son los decrementos en los beneficios económicos o en el potencial de servicio, producidos a lo largo del periodo contable, bien en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos, que dan como resultado decrementos en el patrimonio y no están asociados con la adquisición o producción de bienes y la prestación de servicios, vendidos, ni con la distribución de excedentes (Ministerio de Hacienda y Crédito Público, 2015, p.10).
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-primario.ps-5.py-4.pe-3.d-flex.flex-wrap.align-items-center
          p.fw-bold Costos
          p.mb-0 Los costos son los decrementos en los beneficios económicos o en el potencial de servicio, producidos a lo largo del periodo contable, que están asociados con la adquisición o producción de bienes y la prestación de servicios, vendidos (con independencia de que en el intercambio se recuperen o no los costos), y que dan como resultado decrementos en el patrimonio (Ministerio de Hacienda y Crédito Público, 2015, p.10).


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.card-image
  width: 45%
  position: relative
  display: flex
  flex-wrap: wrap
  align-content: center
  &-left
    background-color: #FFE5DF
    border-top-left-radius: 20px
    border-bottom-left-radius: 20px
    padding-left: 80px !important
    .decorador-img
      position: absolute
      left: -64px
      top: calc(50% - 64px)
      background-image: url('../assets/curso/temas/tema3/img-decorativa-1.svg')
      background-repeat: no-repeat
      background-size: calc(100% - 24px)
      background-position: center
      background-color: #FFE5DF
      width: 128px
      height: 128px
      border-radius: 50%
  &-right
    background-color: #FFF7D9
    border-top-right-radius: 20px
    border-bottom-right-radius: 20px
    padding-right: 80px !important
    .decorador-img
      position: absolute
      right: -64px
      top: calc(50% - 64px)
      background-image: url('../assets/curso/temas/tema3/img-decorativa-2.svg')
      background-repeat: no-repeat
      background-size: calc(100% - 24px)
      background-position: center
      background-color: #FFF7D9
      width: 128px
      height: 128px
      border-radius: 50%
  @media (max-width: 768px)
    width: 100%
    padding: 1.5rem !important
    margin-bottom: 1em
    border-radius: 20px
    .decorador-img
      display: none
</style>
