import React, { Component } from 'react'

import strings from '../assets/strings'

class Intro extends Component {
  render () {
    return (
      <div className='intro flex-center full-height container-fluid'>
        <div>
          <div className='hidden-lg main-title full-width text-center'>
            {strings.nome}
          </div>
          <div className='visible-lg lg-main-title full-width text-center'>
            {strings.nome}
          </div>
          <div className='summary full-width text-center'>
            {strings.resumo}
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
