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
		this.userList = this.userList.bind(this)

		this.state = {
			flat: {
				name: this.props.flat.name,
				description: this.props.flat.description,
				price: this.props.flat.price,
				subway: this.props.flat.subway,
				conversations: this.props.flat.conversations,
				usersShow: false,
				activeConversation: this.props.flat.conversations[0].id
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
		const {
			conversations
		} = this.state.flat;
		const cnvs = [...conversations];

		cnvs.push(conversation);

		let newState = this.state
		newState.flat.conversations = cnvs
		this.setState({
			newState
		})
	}

	handleClick = id => {
		let newState = this.state
		newState.flat.activeConversation = id

		this.setState({
			newState
		});
	};

	showModal = () => {
		console.log('Показать');
		this.setState({
			usersShow: true
		});
	};

	hideModal = () => {
		this.setState({
			usersShow: false
		});
	};

	userList() {
		const {
			conversations,
			activeConversation
		} = this.state.flat;
		const findActiveConversation = conversations.find(conversation => conversation.id === activeConversation);
		const {
			users
		} = findActiveConversation;

		const all_users = [...users];

		return all_users.map((user, index) =>
			<div className='ava_user' key={index}>
				{ (user.avatar.length > 0)
	        ? <img src={ user.avatar }></img>
	        : <div className='message_photo'></div>
	      }
	      <div><div className='spacing-xs-w'></div></div>
	      <div className='p5 dirty_orange'>
	        {user.full_name}
	        <div><div className='spacing-xxxs-h'></div></div>
	        <div className='p4 grey4'>
	          online
	        </div>
	      </div>
	    </div>
		);
	}

	render() {
		const {
			flat
		} = this.state;
		const {
			conversations,
			activeConversation
		} = flat;
		const findActiveConversation = conversations.find(conversation => conversation.id === activeConversation);
		const {
			users
		} = findActiveConversation

		return (
			<div className="conversation_container">
				<ConversationList
					className="flat_conversation"
					conversations={conversations}
					handleClick={this.handleClick}
					/>

				<div className="conversation">
					<div className='conversation_header'>
						<div className='conversation_avatar'></div>
						<h5>{findActiveConversation.title}</h5>
						<div className="users_count grey4" onClick={this.showModal}>{users.length} чел.</div>
					</div>

					<UsersPopup usersShow={this.state.usersShow} handleClose={this.hideModal}>
						<div className='conversation_header'>
							<div className='conversation_avatar'></div>
							<h5>{findActiveConversation.title}</h5>
							<div className="users_count grey4" onClick={this.showModal}>{users.length} чел.</div>
							<div className='close' onClick={this.hideModal}></div>
						</div>

						{ this.userList() }
					</UsersPopup>

					<Conversation conversation={findActiveConversation}/>
				</div>

				<div className='flat_info flat_card'>
					<h5>{flat.name}</h5>
					<div class='main_photo'></div>
					<div class='small_photos'>
						<div className='photo'></div>
					</div>

					<div className='p2'>{flat.price} ₽ в месяц</div>
					<div className='p4'>{flat.description}</div>
					<div className='p4'>{flat.subway}</div>
				</div>
		</div>)
	}
}