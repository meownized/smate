import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import JoinConversations from '../containers/JoinConversations'

document.addEventListener('DOMContentLoaded', () => {
  const conversationsInfo = JSON.parse(document.getElementsByClassName('flat_conversations')[0].dataset.props)

  ReactDOM.render(<JoinConversations {...conversationsInfo}/>, document.getElementsByClassName('flat_conversations')[0].appendChild(document.createElement('section')))
})
