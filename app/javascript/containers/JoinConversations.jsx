import React from 'react'
import $ from 'jquery'

import JoinConversationList from '../components/JoinConversationList'
import Conversation from '../containers/Conversation'
import UsersPopup from '../components/UsersPopup'

export default class JoinConversations extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
		this.userList = this.userList.bind(this)

		this.state = {
			usersShow: false,
			activeConversation: this.props.active_conversation,
			join_conversations: this.props.join_conversations
		}
	}

	componentDidMount() {
		App.conversationsChannel = App.cable.subscriptions.create({
			channel: "ConversationsChannel"
		}, {
			received: (data) => {
				this.newConversation(data);
			}
		});
	}

	newConversation(conversation) {
		const {conversations} = this.state.join_conversations;
		const cnvs = [...conversations];

		cnvs.push(conversation);

		let newState = this.state
		newState.join_conversations.conversations = cnvs
		this.setState({newState})
	}

	handleClick = id => {
		let newState = this.state
		newState.activeConversation = id

		this.setState({newState});
	};

	showModal = () => {
		this.setState({usersShow: true});
	};

	hideModal = () => {
		this.setState({usersShow: false});
	};

	userList(){
		const {join_conversations, activeConversation} = this.state;
		const findActiveConversation = join_conversations.find(conversation => conversation.conversation.id === activeConversation);
		const {users} = findActiveConversation.conversation

	  const all_users = [...users];

	  return all_users.map((user, index) =>
	    <div className="col-sm-12" key={index}>
	      <p className="message-text">
	        {user.full_name}
	      </p>
	    </div>
	  );
	}

	render() {
		const {join_conversations, activeConversation} = this.state;
		const findActiveConversation = join_conversations.find(conversation => conversation.conversation.id === activeConversation);
		const {users} = findActiveConversation.conversation

		return (<div className="conversation_container">
			<JoinConversationList className="flat_conversation" conversations={join_conversations} handleClick={this.handleClick}/>
			<div className="conversation">
				<div className="users_count" onClick={this.showModal}>{users.length}
					участника</div>
				<button type="button" onClick={this.showModal}>
          open
        </button>
				<UsersPopup usersShow={this.state.usersShow} handleClose={this.hideModal}>
					{this.userList()}
				</UsersPopup>
				<Conversation conversation={findActiveConversation.conversation}/>
			</div>
		</div>)
	}
}
