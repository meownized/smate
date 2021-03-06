import React from "react"
import PropTypes from "prop-types"

class JoinConversationList extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = id => {
		this.props.handleClick(id)
	};

	conversationsList() {
		const {
			conversations
		} = this.props

		return conversations.map((conversation, index) => <div className="chat_card" key={index} onClick={() => this.handleClick(conversation.id)}>
			<img src={conversation.flat_cover} className="chat_avatar"></img>
			<div className="chat_name_and_message">
			<p className="p3">
			{conversation.flat_name}
			</p>
			<p className="p4">Вы: Привет!</p>
			</div>
		</div>);
	}

	render() {
		return <div className="conversations_list">
			{this.conversationsList()}
		</div>
	}
}

export default JoinConversationList