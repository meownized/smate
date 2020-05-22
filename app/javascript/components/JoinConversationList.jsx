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
		const conversations = this.props.conversations

		return conversations.map((conversation, index) => <div className="col-sm-12" key={index} onClick={() => this.handleClick(conversation.conversation.id)}>
			<p className="message-text">
				{conversation.conversation.title}
			</p>
		</div>);
	}

	render() {
		return <div className="row" id="chat-box">
			{this.conversationsList()}
		</div>
	}
}

export default JoinConversationList
