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

    .container-100.py-4.mb-5(style="background-color: #E9EDFF")
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

    p.mb-5 Antes de describir cada una de las etapas del ciclo contable, es importante tener claridad sobre los instrumentos donde se registrará la información contable de una empresa, denominados libro mayor y libro menor.

    TabsB.mb-5.color-primario(data-aos="fade-left")
      .py-4.py-md-5(titulo="Libro mayor" :icono="require('@/assets/curso/temas/tema2/t-1.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Se registran, de forma general, todos los registros contables de la empresa, de forma cronológica y precisando el origen de cada operación. Cada hoja del libro mayor comprende una cuenta contable que deberá incluir: fecha, concepto, debe, haber, saldo (diferencia entre el debe y haber). En el libro mayor, se registran las cuentas de elementos patrimoniales.
            p.fw-bold Cuenta con dos columnas:
            ul
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
                p.mb-0 #[b(style="color: #FE502D") El haber:] incluye todos los ingresos, disminución de activos, aumentos de pasivo y de patrimonio neto.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
                p.mb-0 #[b(style="color: #FE502D") El debe:] incluye todos los gastos, los aumentos de activo, disminuciones de pasivo y las de patrimonio neto.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-3.jpg' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Libro diario " :icono="require('@/assets/curso/temas/tema2/t-2.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p El libro diario es de obligatorio cumplimiento para las empresas y debe incluir cada operación que se realice cada día en la empresa, estas cuentas son denominadas asientos.

            p Así como el libro mayor, se organiza cronológicamente y comprende la misma estructura, incluyendo la columna debe (destino de cada operación) y haber (origen).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-4.jpg' alt='Imagen decorativa')
    p.mb-5 En relación con los libros contables, específicamente el Libro Mayor y el Libro Menor, y en consonancia con la propuesta de ciclo contable de Alcarria (2012), se procede a describir detalladamente cada uno de ellos a continuación:

    .container-100.py-4.mb-5(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")
</template>

<script>
import SlyderB from '@/components/SlyderB.vue'
export default {
  name: 'Tema2',
  components: { SlyderB },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Inicio del proceso contable',
        texto: `
          <p>El inicio del proceso parte por un diagnóstico para determinar el estado contable de la organización. Para tal fin, se emplea el inventario, que se encarga de realizar un recuento físico detallado de los bienes, derechos y obligaciones de la empresa que conduzca a la clasificación, descripción y valoración del patrimonio. El inventario se realiza al iniciar y cerrar cada proceso contable con el fin de:</p>
          <ul>
            <li class="d-flex align-items-start">
              <i class="pe-2 pt-1 fas fa-angle-right" style="color: #2D54FE; font-size: 20px" data-aos="fade-right"></i>
              <p class="mb-0"> Identificar la situación patrimonial de la empresa.</p>
            <li class="d-flex align-items-start">
              <i class="pe-2 pt-1 fas fa-angle-right" style="color: #2D54FE; font-size: 20px" data-aos="fade-right"></i>
              <p class="mb-0"> Establecer relación entre la realidad y los saldos contables de las cuentas patrimoniales que reflejan la realidad de la empresa.</p>
        `,
        imagen: require('@/assets/curso/temas/tema2/img-5.png'),
      },
      {
        titulo: 'Apertura de la contabilidad',
        texto: `Se da inicio al proceso contable generalmente el primer día del año, mediante el reconocimiento de la situación patrimonial y financiera de la empresa (activos, pasivos, patrimonio neto). Este reconocimiento es denominado asiento de la contabilidad, donde se cargan todas las cuentas contables (activos, pasivos, patrimonio neto), no responde a ninguna variación patrimonial, ya que no se ha producido ningún movimiento que registrar y genera el primer apunte en el diario contable.`,
        imagen: require('@/assets/curso/temas/tema2/img-6.png'),
      },
      {
        titulo: 'Desarrollo del proceso contable',
        texto: `En este ciclo, se registra en los libros cada uno de los movimientos y transacciones realizados en el año desde el aspecto contable. Los hechos contables deben registrarse en los libros soportes físicos de la información derivada de los mismos: el libro diario, en primer lugar, y el libro mayor, posteriormente. El libro diario posibilita el registro de los hechos contables por orden cronológico, es decir, por orden de realización, mientras que el libro mayor ofrece una clasificación de las cuentas, permitiendo conocer en cualquier momento, de forma descriptiva y cualitativa, los hechos contables que han afectado a las mismas, así como su saldo. En conclusión, se puede afirmar que el libro diario registra los hechos contables, mientras que el libro mayor muestra las variaciones en cada cuenta debido a estos hechos.`,
        imagen: require('@/assets/curso/temas/tema2/img-7.png'),
      },
      {
        titulo: 'Balance de comprobación de sumas y saldos',
        texto: `
          <p>Periódicamente, mínimo cada trimestre, se deben preparar los balances de comprobación de sumas y saldos que permitan visualizar los movimientos contables y verificar el correcto desarrollo del registro, tanto en la anotación del libro diario como en el libro mayor.</p>
          <p>El balance deberá reflejar:</p>
          <ul>
            <li class="d-flex align-items-start">
              <i class="pe-2 pt-1 fas fa-angle-right" style="color: #2D54FE; font-size: 20px" data-aos="fade-right"></i>
              <p class="mb-0">Cada una de las cuentas del libro mayor.</p>
            <li class="d-flex align-items-start">
              <i class="pe-2 pt-1 fas fa-angle-right" style="color: #2D54FE; font-size: 20px" data-aos="fade-right"></i>
              <p class="mb-0">Sumatoria de todas las anotaciones incluidas en el DEBE y en el HABER.</p>
            <li class="d-flex align-items-start">
              <i class="pe-2 pt-1 fas fa-angle-right" style="color: #2D54FE; font-size: 20px" data-aos="fade-right"></i>
              <p class="mb-0">Los datos del libro mayor y del libro menor deben coincidir.</p>
        `,
        imagen: require('@/assets/curso/temas/tema2/img-8.png'),
      },
      {
        titulo: 'Cierre de la contabilidad',
        texto: `En esta fase, se contabilizan todas las cuentas anuales, incorporando todos los movimientos realizados en el año y posibles ajustes contables, con el fin de reflejar la información real del patrimonio de la empresa.`,
        imagen: require('@/assets/curso/temas/tema2/img-9.png'),
      },
    ],
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
