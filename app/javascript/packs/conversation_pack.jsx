import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Conversation from '../containers/Conversation'

document.addEventListener('DOMContentLoaded', () => {
  const conversationInfo = JSON.parse(document.getElementsByClassName('conversation')[0].dataset.props)

  ReactDOM.render(<Conversation {...conversationInfo}/>, document.getElementsByClassName('conversation')[0].appendChild(document.createElement('section')))
})
