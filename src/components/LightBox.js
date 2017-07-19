import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'

export default class LightBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photoIndex: 0
    }
  }

  render () {
    const {photoIndex} = this.state
    const {isOpen, onCloseRequest, images} = this.props
    return (
      <div>
        {isOpen &&
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={onCloseRequest}
          onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length
          })}
          onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % images.length
          })}
        />
        }
      </div>
    )
  }
}

LightBox.propTypes = {
  isOpen: PropTypes.bool,
  onCloseRequest: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
}
