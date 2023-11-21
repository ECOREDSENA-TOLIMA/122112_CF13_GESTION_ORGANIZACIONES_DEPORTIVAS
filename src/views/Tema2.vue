<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Periodo contable
    
    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.mb-5.color-acento-botones
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Antes de definir el proceso contable, es importante tener claridad sobre el concepto de contabilidad. La contabilidad, según Alcarria (2012), es un sistema de información y, como tal, está encargado del registro, la elaboración y la comunicación de información, fundamentalmente de naturaleza económico-financiera, respecto a una entidad que requieren sus usuarios para la adopción racional de decisiones en el ámbito de las actividades económicas.

    p.mb-5 De acuerdo con el mismo autor, el proceso contable, es un conjunto ordenado de etapas con el propósito de registrar cada uno de los hechos económicos según los criterios de reconocimiento, medición y revelaciones establecidos en los marcos normativos, de tal manera que la información financiera que se genere atienda las características cualitativas definidas en los mismos y que se capturen los datos originados en los hechos económicos de manera cronológica, convirtiéndose así en informes financieros útiles para los diferentes usuarios.

    p.text-center.fw-bold El proceso contable se fragmenta generalmente en periodos de un año, con el fin de:
    img.col-xl-10.mx-auto.mb-5(src='@/assets/curso/temas/tema2/img-2.svg' alt='Imagen decorativa' data-aos="fade-left")

    .container-100.py-4(style="background-color: #E9EDFF")
      .col-xxl-10.mx-auto
        p.mb-4 Por lo tanto, el ciclo contable se entiende como el conjunto de etapas desarrolladas durante el ejercicio económico con el objeto de elaborar, al término del mismo, unos estados contables que reflejen correctamente la situación financiera–patrimonial y los resultados de una entidad. A continuación, se presentan las etapas del ciclo contable.
        .d-flex.flex-wrap.justify-content-lg-between.justify-content-around
          .card-decorativa-1(style="background-color: #FFCA00; color: black;")
            p.mb-0 Inicio del proceso 
          .card-decorativa-1(style="background-color: #2D54FE; color: white;")
            p.mb-0 Desarrollo del <br> proceso contable 
          .card-decorativa-1(style="background-color: #FE502D; color: white;")
            p.mb-0 Cierre del proceso
          .card-decorativa-1(style="background-color: #FFCA00; color: black;")
            p.mb-0 Elaboración de los <br> estados contables 


</template>

<script>
export default {
  name: 'Tema2',
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
.card-decorativa-1
  min-width: 190px
  padding: 1rem
  border: 2px solid white
  border-radius: 10px
  text-align: center
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 2rem
  position: relative
  @media (max-width: 1200px)
    &::after
      display: none
  &:last-child::after
    display: none
  &::after
    content: url('../assets/curso/temas/tema2/row-decorativo.svg')
    position: absolute
    right: -70px
  p
    color: currentcolor
</style>
