import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './components/LandingPage'
import muiTheme from './assets/muiTheme'

injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <LandingPage />
      </MuiThemeProvider>
    )
  }
}

export default App
