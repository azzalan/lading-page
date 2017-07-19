import React, { Component } from 'react'

import strings from '../assets/strings'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className='container text-center'>
          {strings.footer}
        </div>
      </div>
    )
  }
}

export default Footer
