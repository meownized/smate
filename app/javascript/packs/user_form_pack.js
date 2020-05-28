import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Registration from '../containers/Registration'

const RegistrationPack = props => (<div>
  <Registration {...props}/>
</div>)

document.addEventListener('DOMContentLoaded', () => {
	const userForm = JSON.parse(document.getElementsByClassName('user_form')[0].dataset.props)

	ReactDOM.render(
		<RegistrationPack {...userForm}/>,
		document.body.appendChild(document.createElement('section'))
	)
})