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
      <div className="UserForm">

      <h4> Основное </h4>

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={ this.props.user.email }
          onChange={ this.handleEmailChange }
          className="default_input"
        />

        <input
          type="text"
          placeholder="Имя"
          name="name"
          value={ this.props.user.name }
          onChange={ this.handleNameChange }
          className="default_input"
        />

        <input
          type="text"
          placeholder="Фамилия"
          name="surname"
          value={ this.props.user.surname }
          onChange={ this.handleSurnameChange }
          className="default_input"
        />

        <select
          type="text"
          placeholder="Пол"
          name="sex"
          value={ this.props.user.sex }
          onChange={ this.handleSexChange }
          className="default_input">
          <option value="ж">Женский</option>
          <option value="м">Мужской</option>
        </select>


        <input
          type="text"
          placeholder="Возраст"
          name="age"
          value={ this.props.user.age }
          onChange={ this.handleAgeChange }
          className="default_input"
        />

        <select
          type="text"
          placeholder="Животные"
          name="animals"
          value={ this.props.user.animals }
          onChange={ this.handleAnimalsChange }
          className="default_input">
          <option value="No_pets">Без животных</option>
          <option value="Has_pets">Есть животные</option>
        </select>

        <h4> Вредные привычки </h4>

        <select
          type="text"
          placeholder="Отношение к курению"
          name="Smoke"
          value={ this.props.user.smoke }
          onChange={ this.handleSmokeChange }
          className="default_input">
          <option value="No_smoking">Не курю</option>
          <option value="Sometimes_smoking">Иногда курю</option>
          <option value="Smoking_allowed">Курю постоянно</option>
        </select>

        <select
          type="text"
          placeholder="Отношение к алкоголю"
          name="Alcohol"
          value={ this.props.user.alcohol }
          onChange={ this.handleAlcoholChange }
          className="default_input">
          <option value="No_alchohol">Не пью</option>
          <option value="Alchohol_allowed">Иногда пью</option>
        </select>

        <h4> Социальная активность </h4>

        <select
          type="text"
          placeholder="Дети"
          name="Children"
          value={ this.props.user.children }
          onChange={ this.handleChildrenChange }
          className="default_input">
          <option value="No_children">Нет детей</option>
          <option value="Has_children">Есть дети</option>
        </select>

        <input
          type="text"
          placeholder="LGBTQ"
          name="Lgbtq"
          value={ this.props.user.lgbtq }
          onChange={ this.handleLgbtqChange }
          className="default_input"
        />

        <h4> Дополнительно </h4>

        <textarea
          type="text"
          placeholder="Расскажите о работе"
          name="Job"
          value={ this.props.user.job }
          onChange={ this.handleJobChange }
          className="default_input textarea"
        />

        <input
          type="text"
          placeholder="Расскажите о себе"
          name="PersonalInfo"
          value={ this.props.user.personalInfo }
          onChange={ this.handlePersonalInfoChange }
          className="default_input"
        />

        <h4> Социальные сети </h4>

        <input
          type="text"
          placeholder="Вконтакте"
          name="Vk"
          value={ this.props.user.vk }
          onChange={ this.handleVkChange }
          className="default_input"
        />

        <input
          type="text"
          placeholder="Facebook"
          name="Facebook"
          value={ this.props.user.facebook }
          onChange={ this.handleFacebookChange }
          className="default_input"
        />

        <input
          type="text"
          placeholder="Instagram"
          name="Instagram"
          value={ this.props.user.instagram }
          onChange={ this.handleInstagramChange }
          className="default_input"
        />
      </div>
    )
  }
}

export default UserInfo
