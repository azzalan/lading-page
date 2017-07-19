import React, { Component } from 'react'

import Work from 'material-ui/svg-icons/action/work'
import Web from 'material-ui/svg-icons/action/view-list'

import strings from '../assets/strings'
import { mainColor } from '../assets/muiTheme'

class Services extends Component {
  render () {
    const styles = {
      largeIcon: {
        width: 30,
        height: 30,
        color: mainColor
      }
    }
    return (
      <div className='second'>
        <div className='container'>
          <div className='title center'>
            {strings.secondTitle}
          </div>
          <div className='text center col-md-offset-3 col-md-6 col-sm-offset-0 col-sm-12'>
            {strings.serviceText}
          </div>
          <div className='row center'>
            <div className='col-sm-6 col-xs-12'>
              <div className='sub-title'>
                <Work style={styles.largeIcon} /> {strings.service1}
              </div>
              <div className='text-icon'>
                {strings.service1Text}
              </div>
            </div>
            <div className='col-sm-6 col-xs-12'>
              <div className='sub-title'>
                <Web style={styles.largeIcon} /> {strings.service2}
              </div>
              <div className='text-icon'>
                {strings.service2Text}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
