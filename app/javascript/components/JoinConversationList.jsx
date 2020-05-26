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

		return conversations.map((conversation, index) => <div className="col-sm-12" key={index} onClick={() => this.handleClick(conversation.id)}>
			<p className="message-text">
				{conversation.flat_name}
			</p>
		</div>);
	}

	render() {
		return <div className="conversations_list">
			{this.conversationsList()}
		</div>
	}
}

export default JoinConversationList