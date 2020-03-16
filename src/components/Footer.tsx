import React from 'react'
import { Link } from 'gatsby'

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="grid-wrapper">
        <div className="col-6 no-padding">
          <ul className="actions">
            <li>
              <Link to="/generic" className="button">
                Política de privacidad
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/generic" className="button">
                Política de cookies
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/generic" className="button">
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h2>Contacto</h2>
          <dl className="alt">
            <dt>Dirección</dt>
            <dd>Plaza José León, 18, 23440 Baeza, Jaén</dd>
            <dt>Teléfono</dt>
            <dd>615 40 43 12</dd>
            <dt>Email</dt>
            <dd>
              <a href="#">clinicalopezobregon@gmail.com</a>
            </dd>
          </dl>
          <ul className="icons">
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram alt">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        &copy; Desarrollo web:{' '}
        <a href="https://www.linkedin.com/in/manuelpayancabrera">
          Manuel Payán Cabrera
        </a>
        .
      </p>
    </footer>
  )
}
