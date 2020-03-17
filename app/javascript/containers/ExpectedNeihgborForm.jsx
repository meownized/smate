import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import ExpectedNeihgbor from '../components/ExpectedNeihgbor'


export default class ExpectedNeihgborForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleNeighborSexChange = this.handleNeighborSexChange.bind(this)
    this.handleNeighborAgeChange = this.handleNeighborAgeChange.bind(this)
    this.handleNeighborChildrenChange = this.handleNeighborChildrenChange.bind(this)
    this.handleNeighborAnimalsChange = this.handleNeighborAnimalsChange.bind(this)
    this.handleNeighborSmokeChange = this.handleNeighborSmokeChange.bind(this)
    this.handleNeighborAlcoholChange = this.handleNeighborAlcoholChange.bind(this)
    this.handleNeighborLgbtqChange = this.handleNeighborLgbtqChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      user: {
        sex: props.user.expected_neighbor.sex,
        age: props.user.expected_neighbor.age,
        children: props.user.expected_neighbor.children,
        animals: props.user.expected_neighbor.animals,
        smoke: props.user.expected_neighbor.smoke,
        alcohol: props.user.expected_neighbor.alcohol,
        lgbtq: props.user.expected_neighbor.lgbtq,
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
          sex: this.state.user.expected_neighbor.sex,
          age: this.state.user.expected_neighbor.age,
          children: this.state.user.expected_neighbor.children,
          animals: this.state.user.expected_neighbor.animals,
          smoke: this.state.user.expected_neighbor.smoke,
          alcohol: this.state.user.expected_neighbor.alcohol,
          lgbtq: this.state.user.expected_neighbor.lgbtq,
        }
      },
      success: response => {
        console.log('User updated: ', response);
      }
    })
  }

  handleNeighborSexChange(sex) {
    let newState = this.state
    newState.user.expected_neighbor.sex = sex

    this.setState({
      newState
    })
  }

  handleNeighborAgeChange(age) {
    let newState = this.state
    newState.user.expected_neighbor.age = age

    this.setState({
      newState
    })
  }

  handleNeighborAnimalsChange(animals) {
    let newState = this.state
    newState.user.expected_neighbor.animals = animals

    this.setState({
      newState
    })
  }

  handleNeighborSmokeChange(smoke) {
    let newState = this.state
    newState.user.expected_neighbor.smoke = smoke

    this.setState({
      newState
    })
  }

  handleNeighborAlcoholChange(alcohol) {
    let newState = this.state
    newState.user.expected_neighbor.alcohol = alcohol

    this.setState({
      newState
    })
  }

  handleNeighborChildrenChange(children) {
    let newState = this.state
    newState.user.expected_neighbor.children = children

    this.setState({
      newState
    })
  }

  handleNeighborLgbtqChange(lgbtq) {
    let newState = this.state
    newState.user.expected_neighbor.lgbtq = lgbtq

    this.setState({
      newState
    })
  }

  render() {
    return (
      <div className="UserForm">
        <UserInfo
          user={ this.state.user }
          handleNeighborSexChange={ this.handleNeighborSexChange }
          handleNeighborAgeChange={ this.handleNeighborAgeChange }
          handleNeighborAnimalsChange={ this.handleNeighborAnimalsChange }
          handleNeighborSmokeChange={ this.handleNeighborSmokeChange }
          handleNeighborAlcoholChange={ this.handleNeighborAlcoholChange }
          handleNeighborChildrenChange={ this.handleNeighborChildrenChange }
          handleNeighborLgbtqChange={ this.handleNeighborLgbtqChange }
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
