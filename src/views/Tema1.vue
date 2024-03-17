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
        p(data-aos="fade-left") El concepto de hecho económico ha sido abordado desde diferentes perspectivas. Desde el punto de vista de la sociología, se define como la actividad humana de producir objetos para satisfacer diferentes necesidades. A medida que el mundo cambia, las necesidades también cambian, lo que resulta en una evolución del hecho económico.
        .cajon.color-primario.p-4(style="background-color: #E0F4FE" data-aos="fade-right")
          p.mb-0 Desde la perspectiva contable, el hecho económico se refiere a cualquier operación realizada por la empresa que afecte o modifique su situación patrimonial. Por lo tanto, actividades como compras, ventas, préstamos, créditos o abonos se consideran hechos económicos, ya que tienen un impacto en el patrimonio de la empresa. Es fundamental que las empresas identifiquen, clasifiquen y registren estos hechos económicos.
          br
          p.mb-0 Según su influencia en el patrimonio, los hechos económicos pueden clasificarse en tres tipos distintos.
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1.
      span  #[i  Tipos de hechos económicos]
    .container-100.py-5.d-none.d-md-flex(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left bottom; background-size: contain; margin-bottom: -3rem"
    )
      img.mb-5.col-xl-9.mx-auto(src='@/assets/curso/temas/tema1/img-2.svg' alt='En la Figura 1 se presentan las características de los tipos de hechos económicos, que incluyen los permutativos, modificativos y mixtos.' data-aos="fade-left")
    img.col-11.mx-auto.d-flex.d-md-none.mb-5(src='@/assets/curso/temas/tema1/img-2_1.svg' alt='En la Figura 1 se presentan las características de los tipos de hechos económicos, que incluyen los permutativos, modificativos y mixtos.' data-aos="fade-left")
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
