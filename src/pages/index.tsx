import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import { Layout } from '../components/layout'
import pic01 from '../assets/images/luismy.jpg'
import pic02 from '../assets/images/gym.jpg'

const Homepage = () => {
  const siteTitle = 'Clínica Fisioterapia Lopez-Obregón'

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Esta web inserta cookies propias para facilitar tu navegación y de
        terceros derivadas de su uso en nuestra web, de medios sociales, así
        como para mejorar la usabilidad y temática de la misma con Google
        Analytics. 
        <span style={{ fontSize: '14px' }}>
          Los datos personales no son consultados. Si continúas navegando
          consideramos que aceptas su uso. Puedes cambiar la configuración u
          obtener más información
        </span>
      </CookieConsent>
      <section id="one" className="main style1">
        <div className="grid-wrapper">
          <div className="col-6">
            <header className="major">
              <h2>
                Luis Miguel López - Obregón Calero
                <br />
              </h2>
            </header>
            <p>
              Luis Miguel es probablemente el mejor fisioterapeuta de Baeza.
              <ul>
                <li>
                  Máster en Fisioterapia Neuromusculoesquelética, Universidad de
                  Jaén
                </li>
                <li>
                  Experto Universitario en Fisioterapia Manipulativa, Miofascial
                  y Fisioterapia Deportiva, Universidad de Jaén
                </li>
                <li>Graduado en Fisioterapia, Universidad de Jaén.</li>
                <li>Graduado en Terapia Ocupacional, Universidad de Granada</li>
              </ul>
              Su clínica de fisioterapia y terapia ocupacional localizada en
              pleno corazón de Baeza está especializada en la rehabilitación y
              tratamiento de múltiples patologías con amplia experiencia en el
              sector, cuyo principal objetivo es buscar el desarrollo adecuado
              de las funciones físicas que se producen en el cuerpo mediante
              técnicas que curan, previenen, recuperan y readaptan a los
              pacientes ante una determinada patología.
              <br />
              En nuestra clínica de fisioterapia en Baeza el sistema de trabajo
              se basa en una combinación de fisioterapia y técnicas miofasciales
              en combinación con otras disciplinas de valoración-tratamiento
              para conseguir un abordaje holístico. Buscamos una atención
              personalizada e individualizada desde un enfoque global y
              conciliador.
            </p>
          </div>
          <div className="col-6">
            <span className="image fit">
              <img src={pic01} alt="" />
            </span>
          </div>
        </div>
        <section id="five" className="main special no-padding">
          <div className="container">
            <ul className="actions uniform">
              <li>
                <Link to="/members" className="button">
                  Conoce al resto de integrantes del equipo
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section id="two" className="main style2">
        <div className="grid-wrapper">
          <div className="col-5">
            <ul className="major-icons">
              <li>
                <span className="icon style2 major fa-calendar"></span>
              </li>
            </ul>
          </div>
          <div className="col-7">
            <header className="major">
              <h2>
                Horario
                <br />
              </h2>
            </header>
            <dl className="alt">
              <dt>Lunes a Viernes</dt>
              <dd>Mañanas: 09:00-14:00 horas, Tardes: 16:00-21:00 horas</dd>
              <dt>Sábado</dt>
              <dd>Mañanas: 10:00-13:00 horas</dd>
            </dl>
          </div>
          <div className="col-5">
            <ul className="major-icons">
              <li>
                <span className="icon style3 major fa-money"></span>
              </li>
            </ul>
          </div>
          <div className="col-7">
            <header className="major">
              <h2>
                Tarifas
                <br />
              </h2>
            </header>
            <dl className="large">
              <dt>Público general</dt>
              <dd>30 euros/1hora</dd>
              <dt>Asegurados Sanitas</dt>
              <dd>30 euros/45min</dd>
              <dt>Asegurados Adeslas</dt>
              <dd>30 euros/45min</dd>
            </dl>
          </div>
        </div>
      </section>

      <section id="three" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Nuestras instalaciones</h2>
            </header>
          </div>

          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Recepción</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Box fisioterapia</h3>
            <p>
              En clínica López-Obregón contamos con 4 box totalmente equipados
              para realizar las diferentes sesioness.
            </p>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Sala de diagnóstico</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
          </div>

          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Gimnasio</h3>
            <p>
              En clínica López-Obregón contamos con 4 box totalmente equipados
              para realizar las diferentes sesioness.
            </p>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Sala nutricionista</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Baños equipados</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Servicios ofertados</h2>
          </header>
          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                En Clínica López – Obregón además de patologías
                musculoesqueléticas, tratamos cualquier tipo de daño neurológico
                (Accidentes Cerebro Vasculares, Traumatismo Cráneo
                Encefálicos…). Los servicios de nuestra Unidad de
                Neurorehabilitación se basan en una atención personalizada,
                integral y holística del paciente, tanto en población infantil
                como adulta. Apostamos por un equipo multidisciplinar, gracias a
                ello realizamos un abordaje completo.
              </p>
              <p>
                En el área de fisioterapia neurológica, se tendrá en cuenta el
                origen de la lesión (Sistema Nervioso Central o Periférico) para
                mejorar la movilidad del paciente. Se trata de crear nuevas
                rutas neurológicas y reforzar las ya existentes.
              </p>
              <p>
                El área de terapia ocupacional es una parte esencial en la
                rehabilitación neurológica para poder conseguir el mayor grado
                de independencia, funcionalidad y autonomía posible en el
                paciente. Trabajamos las Actividades Básicas e Instrumentales de
                la Vida Diaria. Para conseguir dichos objetivos el terapeuta
                ocupacional utiliza técnicas validadas científicamente que
                permiten las mejores conexiones neurológicas de pacientes con
                lesiones cerebrales. Se realizará un estudio de las funciones
                cerebrales, valoración inicial de la situación del paciente y un
                tratamiento intensivo para conseguir los objetivos propuestos.
              </p>
              <p>Además contamos con un nuevo servicio de nutrición....</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Homepage
