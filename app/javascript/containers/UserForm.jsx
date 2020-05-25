import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import UserInfo from '../components/UserInfo'


export default class UserForm extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {
        id: this.props.user.id,
        email: props.user.email,
        name: props.user.name,
        surname: props.user.surname,
        sex: props.user.sex,
        age: props.user.age,
        animals: props.user.animals,
        smoke: props.user.smoke,
        alcohol: props.user.alcohol,
        children: props.user.children,
        lgbtq: props.user.lgbtq,
        job: props.user.job,
        personalInfo: props.user.personalInfo,
        vk: props.user.vk,
        facebook: props.user.facebook,
        instagram: props.user.instagram
      }
    }
  }

  handleSubmit(e) {
    $.ajax({
      url: "../" + this.props.user.id,
      dataType: 'JSON',
      type: 'PUT',
      method: 'PUT',
      data: {
        user: {
          email: this.state.user.email,
          name: this.state.user.name,
          surname: this.state.user.surname,
          sex: this.state.user.sex,
          age: this.state.user.age,
          animals: this.state.user.animals,
          smoke: this.state.user.smoke,
          alcohol: this.state.user.alcohol,
          children: this.state.user.children,
          lgbtq: this.state.user.lgbtq,
          job: this.state.user.job,
          personalInfo: this.state.user.personalInfo,
          vk: this.state.user.vk,
          facebook: this.state.user.facebook,
          instagram: this.state.user.instagram
        }
      },
      success: response => {
        console.log('User updated: ', response);
      }
      })
      .done(function (data) {
        console.log("success", data, data.url);
        var my_url = data.url+'neighbor_edit'
        window.location.replace(my_url)
    })
  }

  handleEmailChange(email) {
    let newState = this.state
    newState.user.email = email

    this.setState({
      newState
    })
  }

  handleNameChange(name) {
    let newState = this.state
    newState.user.name = name

    this.setState({
      newState
    })
  }

  handleSurnameChange(surname) {
    let newState = this.state
    newState.user.surname = surname

    this.setState({
      newState
    })
  }

  handleSexChange(sex) {
    let newState = this.state
    newState.user.sex = sex

    this.setState({
      newState
    })
  }

  handleAgeChange(age) {
    let newState = this.state
    newState.user.age = age

    this.setState({
      newState
    })
  }

  handleAnimalsChange(animals) {
    let newState = this.state
    newState.user.animals = animals

    this.setState({
      newState
    })
  }

  handleSmokeChange(smoke) {
    let newState = this.state
    newState.user.smoke = smoke

    this.setState({
      newState
    })
  }

  handleAlcoholChange(alcohol) {
    let newState = this.state
    newState.user.alcohol = alcohol

    this.setState({
      newState
    })
  }

  handleChildrenChange(children) {
    let newState = this.state
    newState.user.children = children

    this.setState({
      newState
    })
  }

  handleLgbtqChange(lgbtq) {
    let newState = this.state
    newState.user.lgbtq = lgbtq

    this.setState({
      newState
    })
  }

  handleJobChange(job) {
    let newState = this.state
    newState.user.job = job

    this.setState({
      newState
    })
  }

  handlePersonalInfoChange(personalInfo) {
    let newState = this.state
    newState.user.personalInfo = personalInfo

    this.setState({
      newState
    })
  }

  handleVkChange(vk) {
    let newState = this.state
    newState.user.vk = vk

    this.setState({
      newState
    })
  }

  handleFacebookChange(facebook) {
    let newState = this.state
    newState.user.facebook = facebook

    this.setState({
      newState
    })
  }

  handleInstagramChange(instagram) {
    let newState = this.state
    newState.user.instagram = instagram

    this.setState({
      newState
    })
  }

  render() {
    return (
      <section className="">
        <UserInfo
          user={ this.state.user }
          handleEmailChange={ this.handleEmailChange }
          handleNameChange={ this.handleNameChange }
          handleSurnameChange={ this.handleSurnameChange }
          handleSexChange={ this.handleSexChange }
          handleAgeChange={ this.handleAgeChange }
          handleAnimalsChange={ this.handleAnimalsChange }
          handleSmokeChange={ this.handleSmokeChange }
          handleAlcoholChange={ this.handleAlcoholChange }
          handleChildrenChange={ this.handleChildrenChange }
          handleLgbtqChange={ this.handleLgbtqChange }
          handleJobChange={ this.handleJobChange }
          handlePersonalInfoChange={ this.handlePersonalInfoChange }
          handleVkChange={ this.handleVkChange }
          handleFacebookChange={ this.handleFacebookChange }
          handleInstagramChange={ this.handleInstagramChange }
        />

        <div>
          <button
          onClick={this.handleSubmit}
          type="submit"
          value="Submit"
          className="l_button primary_button"> Сохранить
          </button>

          <button
          onClick={this.handleSubmit}
          type="submit"
          value="Submit"
          className="l_button flat_button"> Пропустить
          </button>
        </div>

      </section>

    )
  }
}
