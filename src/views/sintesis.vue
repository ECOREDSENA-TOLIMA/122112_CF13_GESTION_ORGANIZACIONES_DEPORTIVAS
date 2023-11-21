<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, el hecho económico es un proceso contable sistemático que implica una gestión integrada de todos los recursos controlados por la empresa. Esto incluye activos, que se esperan que generen beneficios económicos futuros y deben tener un valor medible, así como pasivos, que son obligaciones que la empresa debe cumplir, ya sea legalmente o para adquirir bienes y servicios. El patrimonio, por otro lado, representa el valor neto de los recursos de la empresa, calculado restando los pasivos de los activos. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
