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
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			}
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


	render() {
		return (
			<div className="registration_container">
        <h4>Основное</h4>
          <div className='label_default_input'>
            <input
              type="text"
              placeholder="Пол"
              name="neighbor_sex"
              value={ this.props.user.neighbor_sex }
              onChange={ this.handleNeighborSexChange }
              className="default_input"
            />

            <label for='neighbor_sex'>Пол</label>
          </div>

          <div className='label_default_input'>
            <input
              type="text"
              placeholder="Возраст"
              name="neighbor_age"
              value={ this.props.user.neighbor_age }
              onChange={ this.handleNeighborAgeChange }
              className="default_input"
            />
            <label for='neighbor_age'>Возраст</label>
          </div>

          <div className='label_default_input'>
            <input
              type="text"
              placeholder="Животные"
              name="neighbor_animals"
              value={ this.props.user.neighbor_animals }
              onChange={ this.handleNeighborAnimalsChange }
              className="default_input"
            />

            <label for='neighbor_animals'>Животные</label>
          </div>

          <div className='label_default_input'>
            <input
            type="text"
            placeholder="Дети"
            name="neighbor_children"
            value={ this.props.user.neighbor_children }
            onChange={ this.handleNeighborChildrenChange }
            className="default_input"
            />

            <label for='neighbor_children'>Дети</label>
          </div>

          <h4>Социальная активность</h4>

          <div className='label_default_input'>
            <input
            type="text"
            placeholder="Дети"
            name="neighbor_children"
            className="default_input"
            />
            <label for='surname'>Любит много общаться</label>
          </div>

          <div className='label_default_input'>
            <input
              type="text"
              placeholder="LGBTQ"
              name="Lgbtq"
              value={ this.props.user.neighbor_lgbtq }
              onChange={ this.handleNeighborLgbtqChange }
              className="default_input"
            />
          <label for='surname'>ЛГБТ+ френдли</label>
          </div>

          <h4>Вредные привычки</h4>

          <div className='label_default_input'>
            <input
              type="text"
              name="Smoke"
              value={ this.props.user.neighbor_smoke }
              onChange={ this.handleNeighborSmokeChange }
              className="default_input"
            />

            <label for='surname'>Может курить</label>
          </div>

          <div className='label_default_input'>
            <input
              type="text"
              placeholder="Отношение к алкоголю"
              name="Alcohol"
              value={ this.props.user.neighbor_alcohol }
              onChange={ this.handleNeighborAlcoholChange }
              className="default_input"
            />
            <label for='surname'>Может пить алкоголь</label>
          </div>
        </div>
		)
	}
}

export default ExpectedNeihgbor