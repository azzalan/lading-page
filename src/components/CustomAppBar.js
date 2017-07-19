import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/IconButton'

import strings from '../assets/strings'

class CustomAppBar extends Component {
  renderAppBar = (style = null) => {
    if (!this.props.hide) {
      return (
        <AppBar
          title={strings.menu}
          style={style}
          onLeftIconButtonTouchTap={() => {}}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon color='white' /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            />
          }
        />
      )
    }
  }

  render () {
    const styles = {
      fixed: {
        position: 'fixed',
        top: 0,
        opacity: 0.8
      }
    }
    return (
      <div>
        <div className='hidden-xs'>
          {this.renderAppBar(styles.fixed)}
        </div>
        <div className='visible-xs'>
          {this.renderAppBar()}
        </div>
      </div>
    )
  }
}

CustomAppBar.propTypes = {
  hide: PropTypes.bool
}

export default CustomAppBar
