import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FullScreen from 'material-ui/svg-icons/action/open-in-new'

import SlideShow from './SlideShow'
import LightBox from './LightBox'

import { mainColorDark } from '../assets/muiTheme'
import strings from '../assets/strings'
import prorimImages from '../assets/images/ProRim/all'
import brainconImages from '../assets/images/BrainCon/all'
import capacitaImages from '../assets/images/Capacita/all'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.showMoreIcon = (
      <FullScreen
        color={mainColorDark}
      />
    )
    this.state = {
      prorimIsOpen: false,
      capacitaIsOpen: false,
      brainconIsOpen: false
    }
  }

  handleOpenProRim = () => {
    this.props.selectHideAppBar(true)
    this.setState({prorimIsOpen: true})
  }

  handleCloseProRim = () => {
    this.props.selectHideAppBar(false)
    this.setState({prorimIsOpen: false})
  }

  handleOpenCapacita = () => {
    this.props.selectHideAppBar(true)
    this.setState({capacitaIsOpen: true})
  }

  handleCloseCapacita = () => {
    this.props.selectHideAppBar(false)
    this.setState({capacitaIsOpen: false})
  }

  handleOpenBrainCon = () => {
    this.props.selectHideAppBar(true)
    this.setState({brainconIsOpen: true})
  }

  handleCloseBrainCon = () => {
    this.props.selectHideAppBar(false)
    this.setState({brainconIsOpen: false})
  }

  buildSlides = (texts, backgrouds, functions) => (
    texts.map((text, index) => (
      <div className='flex-center' key={index}>
        <div className={backgrouds[index]} onTouchTap={functions[index]} >
          <div className='only-show-on-hover flex-center'>
            <div className='box'>
              {text}
              <p>{this.showMoreIcon}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  )

  render () {
    const backgroudSlides = ['prorim', 'capacita', 'braincon']
    const onTouchTapSlides = [
      this.handleOpenProRim,
      this.handleOpenCapacita,
      this.handleOpenBrainCon
    ]
    const textSlides = [
      strings.portfolio1Text,
      strings.portfolio2Text,
      strings.portfolio3Text
    ]
    return (
      <div className='third center'>
        <div className='container'>
          <div className='title center'>
            {strings.thirdTitle}
          </div>
          <SlideShow
            slides={this.buildSlides(textSlides, backgroudSlides, onTouchTapSlides)}
          />
        </div>
        <LightBox
          isOpen={this.state.prorimIsOpen}
          onCloseRequest={this.handleCloseProRim}
          images={prorimImages}
        />
        <LightBox
          isOpen={this.state.capacitaIsOpen}
          onCloseRequest={this.handleCloseCapacita}
          images={capacitaImages}
        />
        <LightBox
          isOpen={this.state.brainconIsOpen}
          onCloseRequest={this.handleCloseBrainCon}
          images={brainconImages}
        />
      </div>
    )
  }
}

Portfolio.propTypes = {
  selectHideAppBar: PropTypes.func.isRequired
}

export default Portfolio
