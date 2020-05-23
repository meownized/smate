import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import ExpectedFlat from '../components/ExpectedFlat'


export default class ExpectedFlatForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleFlatTypeChange = this.handleFlatTypeChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      user: {
        flat_type: props.user.flat_type
      }
    }
  }

  handleSubmit(e) {
    $.ajax({
      url: "../" + this.props.user.id,
      dataType: 'JSON',
      type: 'PUT',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      method: 'PUT',
      data: {
        user: {
          flat_type: this.state.user.flat_type
        }
      },
      success: response => {
        console.log('User updated: ', response);
      }
    })
  }

  handleFlatTypeChange(sex) {
    let newState = this.state
    newState.user.flat_type = flat_type

    this.setState({
      newState
    })
  }

  render() {
    return (
      <div>
        <ExpectedFlat
          user={ this.state.user }
          handleFlatTypeChange={ this.handleFlatTypeChange }
        />

        <input
          onClick={this.handleSubmit}
          type="submit"
          value="Submit"
          className="submitButton"
        />
      </div>
    )
  }
}
