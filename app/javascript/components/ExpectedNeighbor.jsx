import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class ExpectedNeihgbor extends React.Component {
  constructor(props) {
    super(props)

    this.handleNeighborSexChange = this.handleNeighborSexChange.bind(this)
    this.handleNeighborAgeChange = this.handleNeighborAgeChange.bind(this)
    this.handleNeighborChildrenChange = this.handleNeighborChildrenChange.bind(this)
    this.handleNeighborAnimalsChange = this.handleNeighborAnimalsChange.bind(this)
    this.handleNeighborSmokeChange = this.handleNeighborSmokeChange.bind(this)
    this.handleNeighborAlcoholChange = this.handleNeighborAlcoholChange.bind(this)
    this.handleNeighborLgbtqChange = this.handleNeighborLgbtqChange.bind(this)
  }

  componentDidMount() {
    $.ajaxSetup({
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
    })
  }

  handleNeighborSexChange(e) {
    this.props.handleSexChange(e.target.value)
  }

  handleNeighborAgeChange(e) {
    this.props.handleAgeChange(e.target.value)
  }

  handleNeighborChildrenChange(e) {
    this.props.handleChildrenChange(e.target.value)
  }

  handleNeighborAnimalsChange(e) {
    this.props.handleAnimalsChange(e.target.value)
  }

  handleNeighborSmokeChange(e) {
    this.props.handleSmokeChange(e.target.value)
  }

  handleNeighborAlcoholChange(e) {
    this.props.handleAlcoholChange(e.target.value)
  }

  handleNeighborLgbtqChange(e) {
    this.props.handleLgbtqChange(e.target.value)
  }


  render () {
    return (
      <div className="form">
        <h1>О себе</h1>
        <div className="field">

          <h2>
            <input
              type="text"
              placeholder="Пол"
              name="sex"
              value={ this.props.user.neighbor_sex }
              onChange={ this.handleNeighborSexChange }
            />
          </h2>

          <h2>
            <input
              type="text"
              placeholder="Возраст"
              name="age"
              value={ this.props.user.neighbor_age }
              onChange={ this.handleNeighborAgeChange }
            />
          </h2>

          <h2>
          <input
          type="text"
          placeholder="Дети"
          name="Children"
          value={ this.props.user.neighbor_children }
          onChange={ this.handleNeighborChildrenChange }
          />
          </h2>

          <h2>
            <input
              type="text"
              placeholder="Животные"
              name="animals"
              value={ this.props.user.neighbor_animals }
              onChange={ this.handleNeighborAnimalsChange }
            />
          </h2>

          <h2>
            <input
              type="text"
              placeholder="Отношение к курению"
              name="Smoke"
              value={ this.props.user.neighbor_smoke }
              onChange={ this.handleNeighborSmokeChange }
            />
          </h2>

          <h2>
            <input
              type="text"
              placeholder="Отношение к алкоголю"
              name="Alcohol"
              value={ this.props.user.neighbor_alcohol }
              onChange={ this.handleNeighborAlcoholChange }
            />
          </h2>


          <h2>
            <input
              type="text"
              placeholder="LGBTQ"
              name="Lgbtq"
              value={ this.props.user.neighbor_lgbtq }
              onChange={ this.handleNeighborLgbtqChange }
            />
          </h2>

        </div>
      </div>
    )
  }
}

export default ExpectedNeihgbor
