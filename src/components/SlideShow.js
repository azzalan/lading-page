import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Next from 'material-ui/svg-icons/image/navigate-next'
import Previous from 'material-ui/svg-icons/image/navigate-before'

class SlideShow extends Component {
  next = () => {
    this.slider.slickNext()
  }

  previous = () => {
    this.slider.slickPrev()
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    const styles = {
      largeIcon: {
        width: 150,
        height: 150,
        color: 'white'
      }
    }
    const prevArrow = <Previous
      className='arrow-button'
      size={150}
      style={styles.largeIcon}
      onTouchTap={this.previous}
    />
    const nextArrow = <Next
      className='arrow-button'
      style={styles.largeIcon}
      onTouchTap={this.next}
    />
    return (
      <div className='flex-center'>
        <div className='col-md-2 col-sm-12 col-xs-12'>{prevArrow}</div>
        <div className='col-md-8 col-sm-12 col-xs-12'>
          <Slider ref={c => { this.slider = c }} {...settings}>
            {this.props.slides}
          </Slider>
        </div>
        <div className='col-md-2 col-sm-12 col-xs-12'>{nextArrow}</div>
      </div>
    )
  }
}

SlideShow.propTypes = {
  slides: PropTypes.array.isRequired
}

export default SlideShow
