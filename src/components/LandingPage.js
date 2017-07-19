import React, { Component } from 'react'

import CustomAppBar from './CustomAppBar'
import Intro from './Intro'
import Services from './Services'
import Portfolio from './Portfolio'
import Abilities from './Abilities'
import Contact from './Contact'
import Footer from './Footer'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hideAppBar: false
    }
  }

  selectHideAppBar = (x) => this.setState({hideAppBar: x})

  render () {
    return (
      <div>
        <CustomAppBar hide={this.state.hideAppBar} />
        <Intro />
        <Services />
        <Portfolio selectHideAppBar={this.selectHideAppBar} />
        <Abilities />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default LandingPage
