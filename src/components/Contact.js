import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Formsy from 'formsy-react'
import RaisedButton from 'material-ui/RaisedButton'

import { selectFormData } from '../actions/index'

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
  }

  render () {
    const fields = [
      {
        accessor: 'nome',
        header: 'Nome',
        type: 'text'
      },
      {
        accessor: 'assunto',
        header: 'Assunto',
        type: 'text'
      },
      {
        accessor: 'mensagem',
        header: 'Mensagem',
        type: 'textArea'
      }
    ]
    return (
      <div className='contact'>
        <div className='container'>
          <div className='title center'>
            {strings.contactTitle}
          </div>
          <div className='col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-12'>
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
            </div>
            <div className='text-center submit-button'>
              <RaisedButton
                primary
                label='Enviar'
                disabled={!this.state.canSubmit}
                onTouchTap={this.submitForm}
              />
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
