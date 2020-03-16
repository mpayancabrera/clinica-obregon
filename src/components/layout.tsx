import React from 'react'
import '../assets/scss/main.scss'

import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = props => {
  const { children } = props

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
