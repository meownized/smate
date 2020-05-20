import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import UserForm from '../containers/UserForm'

const UserFormPack = props => (<div>
  <UserForm {...props}/>
</div>)

document.addEventListener('DOMContentLoaded', () => {
  const userForm = JSON.parse(document.getElementsByClassName('user_form')[0].dataset.props)

  ReactDOM.render(<UserFormPack {...userForm}/>, document.body.appendChild(document.createElement('section')),)
})
