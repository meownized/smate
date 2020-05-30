import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Conversation from '../containers/Conversation'

document.addEventListener('DOMContentLoaded', () => {
	const conversationInfo = JSON.parse(document.getElementsByClassName('conversation')[0].dataset.props)

	ReactDOM.render(<Conversation {...conversationInfo}/>, document.getElementsByClassName('conversation')[0].appendChild(document.createElement('section')))
})

import FlatConversations from '../containers/FlatConversations'

document.addEventListener('DOMContentLoaded', () => {
	const conversationsInfo = JSON.parse(document.getElementsByClassName('flat_conversations')[0].dataset.props)

	ReactDOM.render(<FlatConversations {...conversationsInfo}/>, document.body.appendChild(document.createElement('section')))
})

import JoinConversations from '../containers/JoinConversations'

document.addEventListener('DOMContentLoaded', () => {
	const conversationsInfo = JSON.parse(document.getElementsByClassName('flat_conversations')[0].dataset.props)

	ReactDOM.render(<JoinConversations {...conversationsInfo}/>, document.body.appendChild(document.createElement('section')))
})