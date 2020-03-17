import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this)
    this.handleSexChange = this.handleSexChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleAnimalsChange = this.handleAnimalsChange.bind(this)
    this.handleSmokeChange = this.handleSmokeChange.bind(this)
    this.handleAlcoholChange = this.handleAlcoholChange.bind(this)
    this.handleChildrenChange = this.handleChildrenChange.bind(this)
    this.handleLgbtqChange = this.handleLgbtqChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.handleVkChange = this.handleVkChange.bind(this)
    this.handleFacebookChange = this.handleFacebookChange.bind(this)
    this.handleInstagramChange = this.handleInstagramChange.bind(this)
  }

  componentDidMount() {
    $.ajaxSetup({
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
    })
  }

  handleEmailChange(e) {
    this.props.handleEmailChange(e.target.value)
  }

  handleNameChange(e) {
    this.props.handleNameChange(e.target.value)
  }

  handleSurnameChange(e) {
    this.props.handleSurnameChange(e.target.value)
  }

  handleSexChange(e) {
    this.props.handleSexChange(e.target.value)
  }

  handleAgeChange(e) {
    this.props.handleAgeChange(e.target.value)
  }

  handleAnimalsChange(e) {
    this.props.handleAnimalsChange(e.target.value)
  }

  handleSmokeChange(e) {
    this.props.handleSmokeChange(e.target.value)
  }

  handleAlcoholChange(e) {
    this.props.handleAlcoholChange(e.target.value)
  }

  handleChildrenChange(e) {
    this.props.handleChildrenChange(e.target.value)
  }

  handleLgbtqChange(e) {
    this.props.handleLgbtqChange(e.target.value)
  }

  handleJobChange(e) {
    this.props.handleJobChange(e.target.value)
  }

  handlePersonalInfoChange(e) {
    this.props.handlePersonalInfoChange(e.target.value)
  }

  handleVkChange(e) {
    this.props.handleVkChange(e.target.value)
  }

  handleFacebookChange(e) {
    this.props.handleFacebookChange(e.target.value)
  }

  handleInstagramChange(e) {
    this.props.handleInstagramChange(e.target.value)
  }


  render () {
    return (
      <div className="form">

        <h1>Расскажите о себе</h1>
        <p>Это понадобится, чтобы мы смогли подобрать наиболее подходящего соседа.
         К этим пунктам можно будет вернуться в любой момент.</p>
        <div className="field">

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={ this.props.user.email }
              onChange={ this.handleEmailChange }
            />

            <input
              type="text"
              placeholder="Имя"
              name="name"
              value={ this.props.user.name }
              onChange={ this.handleNameChange }
            />

            <input
              type="text"
              placeholder="Фамилия"
              name="surname"
              value={ this.props.user.surname }
              onChange={ this.handleSurnameChange }
            />

            <select
              type="text"
              placeholder="Пол"
              name="sex"
              value={ this.props.user.sex }
              onChange={ this.handleSexChange }>
              <option value="М">Мужской</option>
              <option value="Ж">Женский</option>
            </select>


            <input
              type="text"
              placeholder="Возраст"
              name="age"
              value={ this.props.user.age }
              onChange={ this.handleAgeChange }
            />

            <select
              type="text"
              placeholder="Животные"
              name="animals"
              value={ this.props.user.animals }
              onChange={ this.handleAnimalsChange }>
              <option value="No">Без животных</option>
              <option value="Yes">Есть животные</option>
            </select>

            <select
              type="text"
              placeholder="Отношение к курению"
              name="Smoke"
              value={ this.props.user.smoke }
              onChange={ this.handleSmokeChange }>
              <option value="No">Не курю</option>
              <option value="Sometimes">Курю иногда</option>
              <option value="Yes">Курю постоянно</option>
            </select>

            <input
              type="text"
              placeholder="Отношение к алкоголю"
              name="Alcohol"
              value={ this.props.user.alcohol }
              onChange={ this.handleAlcoholChange }
            />

            <input
              type="text"
              placeholder="Дети"
              name="Children"
              value={ this.props.user.children }
              onChange={ this.handleChildrenChange }
            />

            <input
              type="text"
              placeholder="LGBTQ"
              name="Lgbtq"
              value={ this.props.user.lgbtq }
              onChange={ this.handleLgbtqChange }
            />

            <input
              type="text"
              placeholder="Расскажите о работе"
              name="Job"
              value={ this.props.user.job }
              onChange={ this.handleJobChange }
            />

            <input
              type="text"
              placeholder="Расскажите о себе"
              name="PersonalInfo"
              value={ this.props.user.personalInfo }
              onChange={ this.handlePersonalInfoChange }
            />

            <input
              type="text"
              placeholder="Вконтакте"
              name="Vk"
              value={ this.props.user.vk }
              onChange={ this.handleVkChange }
            />

            <input
              type="text"
              placeholder="Facebook"
              name="Facebook"
              value={ this.props.user.facebook }
              onChange={ this.handleFacebookChange }
            />

            <input
              type="text"
              placeholder="Instagram"
              name="Instagram"
              value={ this.props.user.instagram }
              onChange={ this.handleInstagramChange }
            />


        </div>
      </div>
    )
  }
}

export default UserInfo
