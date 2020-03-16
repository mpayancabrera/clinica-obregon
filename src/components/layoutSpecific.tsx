import React from 'react'
import '../assets/scss/main.scss'

import { Footer } from './Footer'

export const LayoutSpecific = props => {
  const { children } = props

  return (
    <div id="wrapper">
      {children}
      <Footer />
    </div>
  )
}
