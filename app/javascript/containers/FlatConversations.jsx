import React from 'react'
import $ from 'jquery'

import ConversationList from '../components/ConversationList'
import Conversation from '../containers/Conversation'
import UsersPopup from '../components/UsersPopup'

export default class FlatConversations extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
		// this.userList = this.userList.bind(this)

		this.state = {
			flat: {
				users: this.props.flat.users,
				conversations: this.props.flat.conversations,
				activeConversation: 1,
				usersShow: false
			}
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
		const {conversations} = this.state.flat;
		const cnvs = [...conversations];

		cnvs.push(conversation);

		let newState = this.state
		newState.flat.conversations = cnvs
		this.setState({newState})
	}

	handleClick = id => {
		let newState = this.state
		newState.flat.activeConversation = id

		this.setState({newState});
	};

	showModal = () => {
		console.log('Показать');
		this.setState({usersShow: true});
	};

	hideModal = () => {
		this.setState({usersShow: false});
	};

	userList(){
	  const {users} = this.state.flat;
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
		const {conversations, activeConversation, users} = this.state.flat;
		const {messages} = conversations;
		const findActiveConversation = conversations.find(conversation => conversation.id === activeConversation);
		console.log(findActiveConversation);

		return (<div className="conversation_container">
			<ConversationList className="flat_conversation" conversations={conversations} handleClick={this.handleClick}/>
			<div className="conversation">
				<div className="users_count" onClick={this.showModal}>{users.length}
					участниdка</div>
				<button type="button" onClick={this.showModal}>
          open
        </button>
				<UsersPopup usersShow={this.state.usersShow} handleClose={this.hideModal}>
					{this.userList()}
				</UsersPopup>
				<Conversation conversation={findActiveConversation}/>
			</div>
		</div>)
	}
}
