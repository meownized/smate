import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import ExpectedNeihgbor from '../components/ExpectedNeighbor'


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
        neighbor_sex: props.user.neighbor_sex,
        neighbor_age: props.user.neighbor_age,
        neighbor_children: props.user.neighbor_children,
        neighbor_animals: props.user.neighbor_animals,
        neighbor_smoke: props.user.neighbor_smoke,
        neighbor_alcohol: props.user.neighbor_alcohol,
        neighbor_lgbtq: props.user.neighbor_lgbtq,
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
          sex: this.state.user.neighbor_sex,
          age: this.state.user.neighbor_age,
          children: this.state.user.neighbor_children,
          animals: this.state.user.neighbor_animals,
          smoke: this.state.user.neighbor_smoke,
          alcohol: this.state.user.neighbor_alcohol,
          lgbtq: this.state.user.neighbor_lgbtq,
        }
      },
      success: response => {
        console.log('User updated: ', response);
      }
    })
  }

  handleNeighborSexChange(sex) {
    let newState = this.state
    newState.user.neighbor_sex = sex

    this.setState({
      newState
    })
  }

  handleNeighborAgeChange(age) {
    let newState = this.state
    newState.user.neighbor_age = age

    this.setState({
      newState
    })
  }

  handleNeighborAnimalsChange(animals) {
    let newState = this.state
    newState.user.neighbor_animals = animals

    this.setState({
      newState
    })
  }

  handleNeighborSmokeChange(smoke) {
    let newState = this.state
    newState.user.neighbor_smoke = smoke

    this.setState({
      newState
    })
  }

  handleNeighborAlcoholChange(alcohol) {
    let newState = this.state
    newState.user.neighbor_alcohol = alcohol

    this.setState({
      newState
    })
  }

  handleNeighborChildrenChange(children) {
    let newState = this.state
    newState.user.neighbor_children = children

    this.setState({
      newState
    })
  }

  handleNeighborLgbtqChange(lgbtq) {
    let newState = this.state
    newState.user.neighbor_lgbtq = lgbtq

    this.setState({
      newState
    })
  }

  render() {
    return (
      <div>
        <ExpectedNeihgbor
          user={ this.state.user }
          handleNeighborSexChange={ this.handleNeighborSexChange }
          handleNeighborAgeChange={ this.handleNeighborAgeChange }
          handleNeighborAnimalsChange={ this.handleNeighborAnimalsChange }
          handleNeighborChildrenChange={ this.handleNeighborChildrenChange }

          handleNeighborLgbtqChange={ this.handleNeighborLgbtqChange }

          handleNeighborSmokeChange={ this.handleNeighborSmokeChange }
          handleNeighborAlcoholChange={ this.handleNeighborAlcoholChange }
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
