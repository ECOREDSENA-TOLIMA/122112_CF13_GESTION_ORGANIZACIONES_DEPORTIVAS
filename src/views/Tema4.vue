<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Código de comercio

    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema4/img-1.png" alt="Imagen decorativa" style="max-width: 505px" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        .cajon.color-primario.p-4.mb-4(style="background-color: #E0F4FE" data-aos="fade-right")
          p.mb-0 El Código de comercio, según Gardey (2009), es el conjunto de normas, criterios y principios del derecho mercantil que tratan de regular las relaciones mercantiles. El Código de Comercio regula todos los actos de comercio, que son definidos como la compra de mercancía para revender, ya sea de cualquier naturaleza, como semielaborados, elaborados o solo para alquilar o rentabilizar.
        p.mb-0(data-aos="fade-left") Es importante identificar el código del campo en el que interviene la organización o la prestación de servicios del gestor deportivo, con el fin de reconocer el campo de acción, los alcances, además de realizar su respectivo registro ante la dirección de impuestos y aduanas nacionales DIAN para la respectiva legalización de su actividad económica. En el caso de las organizaciones deportivas que intervienen en distintos ámbitos de la actividad física, el deporte y la recreación, se encuentran los siguientes códigos.
    
    .container-100(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom; background-size: content; margin-bottom: -3rem"
    )
      .col-xl-10.mx-auto
        .titulo-sexto.color-acento-botones.mb-3(data-aos="fade-right")
          h5 Tabla 1.
          span #[i Códigos de comercio relacionados con la gestión deportiva]
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")
          table
            caption.text-center(style="font-weight: normal; color: #727997") Fuente: #[a(target="_blank" style="color: #2D54FE" href="https://linea.ccb.org.co/descripcionciiu/") https://linea.ccb.org.co/descripcionciiu/]
            thead
              tr(style="background-color: #2D54FE; color: white")
                th Código
                th(colspan="2") Descripción
            tbody
              tr(style="background-color: #F5F7FE")
                td.fw-bold.text-center 9311
                td(colspan="2") Gestión de instalaciones deportivas.
              tr(style="background-color: #FFFFFF")
                td.fw-bold.text-center 8552
                td(colspan="2") Enseñanza deportiva y recreativa.
              tr(style="background-color: #F5F7FE")
                td.fw-bold.text-center 9312
                td(colspan="2") Actividades de clubes deportivos.
              tr(style="background-color: #FFFFFF")
                td.fw-bold.text-center 9319
                td(colspan="2") Otras actividades deportivas.
              tr(style="background-color: #F5F7FE")
                td.fw-bold.text-center 9329
                td(colspan="2") Otras actividades recreativas y de esparcimiento.
              tr(style="background-color: #FFFFFF")
                td.fw-bold.text-center 7721
                td(colspan="2") Alquiler y arrendamiento de equipo recreativo y deportivo.
              tr(style="background-color: #F5F7FE")
                td.fw-bold.text-center 4762
                td(colspan="2") Comercio al por menor de artículos deportivos, en establecimientos especializados.
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

<style lang="sass"></style>
