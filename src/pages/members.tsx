import React from 'react'
import Helmet from 'react-helmet'
import { LayoutSpecific } from '../components/layoutSpecific'
import { Link } from 'gatsby'
import pic01 from '../assets/images/luismy.jpg'

const MembersPage = () => {
  return (
    <LayoutSpecific>
      <Helmet title="Generic Page Title" />
      <div id="main">
        <div className="margin-30">
          <Link to="/" className="button">
            Volver a la página principal
          </Link>
        </div>
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
                    Máster en Fisioterapia Neuromusculoesquelética, Universidad
                    de Jaén
                  </li>
                  <li>
                    Experto Universitario en Fisioterapia Manipulativa,
                    Miofascial y Fisioterapia Deportiva, Universidad de Jaén
                  </li>
                  <li>Graduado en Fisioterapia, Universidad de Jaén.</li>
                  <li>
                    Graduado en Terapia Ocupacional, Universidad de Granada
                  </li>
                </ul>
                Su clínica de fisioterapia y terapia ocupacional localizada en
                pleno corazón de Baeza está especializada en la rehabilitación y
                tratamiento de múltiples patologías con amplia experiencia en el
                sector, cuyo principal objetivo es buscar el desarrollo adecuado
                de las funciones físicas que se producen en el cuerpo mediante
                técnicas que curan, previenen, recuperan y readaptan a los
                pacientes ante una determinada patología.
                <br />
                En nuestra clínica de fisioterapia en Baeza el sistema de
                trabajo se basa en una combinación de fisioterapia y técnicas
                miofasciales en combinación con otras disciplinas de
                valoración-tratamiento para conseguir un abordaje holístico.
                Buscamos una atención personalizada e individualizada desde un
                enfoque global y conciliador.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>
      </div>
    </LayoutSpecific>
  )
}

export default MembersPage
