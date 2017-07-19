import React, { Component } from 'react'
import Check from 'material-ui/svg-icons/action/done'
import Code from 'material-ui/svg-icons/action/code'

import strings from '../assets/strings'

class Abilities extends Component {
  render () {
    return (
      <div className='forth'>
        <div className='container'>
          <div className='title center'>
            {strings.forthTitle}
          </div>
          <div className='flex-center'>
            <div className='list'>
              <ul>
                <li><Check /> Django</li>
                <li><Check /> React</li>
                <li><Check /> Firebase</li>
                <li><Check /> Bootstrap</li>
              </ul>
            </div>
            <div className='list'>
              <ul>
                <li><Code /> Python</li>
                <li><Code /> Javascript</li>
                <li><Code /> HTML</li>
                <li><Code /> CSS</li>
                <li><Code /> SASS</li>
                <li><Code /> UML</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Abilities
