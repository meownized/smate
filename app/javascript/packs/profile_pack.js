import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Profile from '../containers/Profile'

document.addEventListener('DOMContentLoaded', () => {
  const profileInfo = JSON.parse(document.getElementsByClassName('profile_pack')[0].dataset.props)

  ReactDOM.render(<Profile {...profileInfo}/>, document.getElementsByClassName('profile_pack')[0].appendChild(document.createElement('section')))
})
