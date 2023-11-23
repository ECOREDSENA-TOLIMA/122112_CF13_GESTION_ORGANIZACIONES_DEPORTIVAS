<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Hecho económico
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-1.png" alt="Imagen decorativa" style="max-width: 505px" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        p(data-aos="fade-left") El concepto del hecho económico ha sido abordado por diferentes enfoques. Según Tosta (1956), desde el punto de vista de la sociología, el hecho económico se define como la actividad humana de producir objetos para satisfacer necesidades. A medida que el mundo cambia, las necesidades cambian y, por ende, el hecho económico también lo hace. Desde el punto de vista contable, el hecho económico se entiende como cualquier operación que se realice en la empresa que altere o modifique la situación patrimonial.
        .cajon.color-primario.p-4(style="background-color: #E0F4FE" data-aos="fade-right")
          p.mb-0 Por lo tanto, cada actividad u operación que realice la empresa, como lo es una compra, una venta, un préstamo, un crédito o un abono influyen en el patrimonio, considerados hechos económicos, los cuales las empresas deben identificar, clasificar y registrar. Según su incidencia en el patrimonio, los hechos económicos pueden ser de tres tipos.
    
    .container-100.py-5.d-none.d-md-flex(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left bottom; background-size: contain; margin-bottom: -3rem"
    )
      img.mb-5.col-xl-9.mx-auto(src='@/assets/curso/temas/tema1/img-2.svg' alt='Imagen decorativa' data-aos="fade-left")
    img.col-11.mx-auto.d-flex.d-md-none.mb-5(src='@/assets/curso/temas/tema1/img-2_1.svg' alt='Imagen decorativa' data-aos="fade-left")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
