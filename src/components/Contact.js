import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Formsy from 'formsy-react'
import RaisedButton from 'material-ui/RaisedButton'
import Email from 'material-ui/svg-icons/content/send'
import Icon from 'react-simple-icons'

import { selectFormData } from '../actions/index'

import { database } from '../firebase'

import RowFormFields from '../form/row_form_fields'

import strings from '../assets/strings'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      canSubmit: false
    }
  }

  enableButton = () => this.setState({canSubmit: true})

  disableButton = () => this.setState({canSubmit: false})

  notifyFormError = (data) => {
    console.error('Form error:', data)
  }

  submitForm = () => {
    console.log(this.props.formData)
    this.props.selectFormData({})
    database.ref('messages').push(this.props.formData)
  }

  render () {
    const fields = [
      {
        accessor: 'name',
        header: 'Nome',
        type: 'text'
      },
      {
        accessor: 'subject',
        header: 'Assunto',
        type: 'text'
      },
      {
        accessor: 'message',
        header: 'Mensagem',
        type: 'textArea'
      }
    ]
    const left = (
      <span className='text'>
        <p>Para falar comigo:</p>
        <p className='email'>
          <a href='mailto:azz_alan@hotmail.com'>
            <Email style={{color: 'white'}} />
            azz_alan@hotmail.com
          </a>
        </p>
        <p>Ou mande uma mensagem usando a caixa a seguir.</p>
        <p>Caso queira saber mais sobre mim:</p>
        <p className='flex-center icons'>
          <a href='https://www.linkedin.com/in/alan-ramalho-0ab4b7a4/'>
            <Icon name='linkedin' size='50' />
          </a>
          <a href='https://github.com/azzalan'>
            <Icon name='github' size='50' />
          </a>
          <a href='https://www.facebook.com/alan.ramalho.7'>
            <Icon name='facebook' size='50' />
          </a>
        </p>
        <p>Obrigado pela visita.</p>
      </span>
    )
    const right = (
      <div className='form-box'>
        <Formsy.Form
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          ref='form'
        >
          <RowFormFields
            fields={fields}
          />
        </Formsy.Form>
        <div className='text-center submit-button'>
          <RaisedButton
            primary
            label='Enviar'
            disabled={!this.state.canSubmit}
            onTouchTap={this.submitForm}
          />
        </div>
      </div>
    )
    return (
      <div className='contact'>
        <div className='container'>
          <div className='title center'>
            {strings.contactTitle}
          </div>
          <div className='visible-lg visible-md'>
            <div className='flex-vertical-center'>
              <div className='col-md-6 flex-right'>
                {left}
              </div>
              <div className='col-md-6 flex-left'>
                {right}
              </div>
            </div>
          </div>
          <div className='visible-sm visible-xs'>
            <div className='col-md-12 flex-center'>
              {left}
            </div>
            <div className='col-md-12 flex-center'>
              {right}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  // redux state
  formData: PropTypes.object,
  // redux actions
  selectFormData: PropTypes.func.isRequires
}

function mapStateToProps (state) {
  return {
    formData: state.formData
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectFormData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
