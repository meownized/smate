import React from "react"
import PropTypes from "prop-types"
import MessageList from "../components/MessageList"

export default class Conversation extends React.Component {
	constructor(props) {
		super(props);

		this.postMessage = this.postMessage.bind(this)
		this.newMessage = this.newMessage.bind(this)

		this.state = {
			conversation: {
				messages: this.props.conversation.messages,
				id: this.props.conversation.id,
				onlineUsers: []
			}
		};
	}

	newMessage(message) {

		const {
			messages
		} = this.state.conversation;

		const msgs = [...messages];

		if (msgs.length >= 15) {
			msgs.shift();
		}

		msgs.push(message);

		let newState = this.state
		newState.conversation.messages = msgs

		this.setState({
			newState
		})
	}

	postMessage(event) {
		event.preventDefault();
		App.conversationChannel.perform("send_message", {
			conversation_id: this.props.conversation.id,
			body: this.refs.body.value
		});
		this.refs.body.value = "";
	}

	componentWillUnmount() {
		App.conversationChannel.unsubscribe()
	}

	componentDidMount() {
		App.conversationChannel = App.cable.subscriptions.create({
			channel: "ConversationChannel",
			conversation_id: this.props.conversation.id
		}, {
			received: (data) => {
				this.newMessage(data);
			}
		});
	}

	componentDidUpdate(nextProps) {
		console.log("hey")
		if (this.props.conversation.id !== nextProps.conversation.id) {
			App.conversationChannel.unsubscribe()

			App.conversationChannel = App.cable.subscriptions.create({
				channel: "ConversationChannel",
				conversation_id: this.props.conversation.id
			}, {
				received: (data) => {
					this.newMessage(data);
				}
			});

			this.setState({
				conversation: this.props.conversation
			})
		}
	}

	form() {
		return (<div>
			<form className='message_form' onSubmit={ this.postMessage }>
				<div className='new_message'>
					<input
						ref="body"
						type="text"
						className="new_message_input"
						placeholder="Новое сообщение..."
					/>

					<button type="submit" className="s_icon_button"><div className='send_icon'></div></button>
				</div>
			</form>
		</div>)
	}

	render() {
		const {
			messages
		} = this.state.conversation;

		return (<div>
			<div>
				<MessageList messages={messages}/>
			</div>

			{ this.form() }
		</div>)
	}
}