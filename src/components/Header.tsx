import React from 'react'

export const Header = () => {
  return (
    <section id="header">
      <div className="inner">
        {/* <span className="icon major fa-cloud"></span> */}
        <h1>
          <strong>Clínica López-Obregón</strong>
          <br />
          fisioterapia y rehabilitación.
        </h1>
        <p>
          Te invitamos a conocer la razón por la que somos un centro de
          referencia
          <br />
          en el campo de la fisioterapia y la terapia ocupacional
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Saber más
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
