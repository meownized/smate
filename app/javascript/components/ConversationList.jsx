import React from "react"
import PropTypes from "prop-types"

class ConversationList extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = id => {
		this.props.handleClick(id)
	};

	conversationsList() {
		const conversations = this.props.conversations

		return conversations.map((conversation, index) => <div className="chat_card" key={index} onClick={() => this.handleClick(conversation.id)}>
			<div className="chat_avatar"></div>
			<div className="chat_name_and_message">
			<p className="p3">
				{conversation.title}
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

export default ConversationList