import React from 'react'
import $ from 'jquery'

import JoinConversationList from '../components/JoinConversationList'
import Conversation from '../containers/Conversation'
import UsersPopup from '../components/UsersPopup'
import WannaLivePopup from '../components/WannaLivePopup'

export default class JoinConversations extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
		this.userList = this.userList.bind(this)
		this.photosList = this.photosList.bind(this)
		this.showSecondModal = this.showSecondModal.bind(this)
		this.hideSecondModal = this.hideSecondModal.bind(this)

		this.state = {
			usersShow: false,
			activeConversation: this.props.active_conversation,
			join_conversations: this.props.join_conversations,
			flats: this.props.flats,
			wannaLive: false
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
		} = this.state.join_conversations;
		const cnvs = [...conversations];

		cnvs.push(conversation);

		let newState = this.state
		newState.join_conversations.conversations = cnvs
		this.setState({
			newState
		})
	}

	handleClick = id => {
		let newState = this.state
		newState.activeConversation = id

		this.setState({
			newState
		});
	};

	showModal = () => {
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
			join_conversations,
			activeConversation
		} = this.state;
		const findActiveConversation = join_conversations.find(conversation => conversation.id === activeConversation);
		const {
			users
		} = findActiveConversation

		const all_users = [...users];
		console.log(all_users);

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

	photosList(flat) {
		const {
			photos
		} = flat;

		const all_photos = [...photos];

		return all_photos.map((photo, index) =>
			<img key={ index } src={ photo } className='photo'></img>
		);
	}
	showSecondModal = () => {
		console.log('Показать');
		this.setState({
			wannaLive: true
		});
	};

	hideSecondModal = () => {
		this.setState({
			wannaLive: false
		});
	};


	render() {
		const {
			join_conversations,
			activeConversation,
			flats
		} = this.state;
		const findActiveConversation = join_conversations.find(conversation => conversation.id === activeConversation);

		const findActiveFlat = flats.find(flat => flat.id === findActiveConversation.flat_id);
		const {
			users
		} = findActiveConversation

		console.log(findActiveFlat.photos);

		return (<div className="conversation_container">

			<JoinConversationList className="flat_conversation" conversations={join_conversations} handleClick={this.handleClick}/>

			<div className="conversation">
				<div className='conversation_header'>
					<img src={findActiveFlat.cover} className='conversation_avatar'></img>
					<h5>{findActiveFlat.name}</h5>
					<div className="users_count grey4" onClick={this.showModal}>{users.length} чел.</div>

						<div className='s_button flat_button'>Мне не подходит</div>

						<div className='s_button primary_button' onClick={this.showSecondModal}>Хочу тут жить</div>
				</div>

				<UsersPopup usersShow={this.state.usersShow} handleClose={this.hideModal}>
					<div className='conversation_header'>
						<div className='conversation_avatar'></div>
						<h5>{findActiveFlat.name}</h5>
						<div className="users_count grey4" onClick={this.showModal}>{users.length} чел.</div>
						<div className='close' onClick={this.hideModal}></div>
					</div>

					{ this.userList() }
				</UsersPopup>

				<WannaLivePopup wannaLive={this.state.wannaLive} handleClose={this.hideSecondModal}>
					<div className='wanna_live'></div>
					<div><div className='spacing-xl-h'></div></div>
					<h4>Добро пожаловать в новый дом!</h4>
					<div><div className='spacing-xs-h'></div></div>
					<p>Твой домашний чат с супер-соседями появится слева в самом верху.</p>
					<div className='close' onClick={this.hideSecondModal}></div>
				</WannaLivePopup>

				<Conversation conversation={findActiveConversation}/>
			</div>

			<div className='flat_info flat_card'>
				<h5>{findActiveFlat.name}</h5>
				<img src={findActiveFlat.cover} className='main_photo'></img>
				<div className='small_photos'>
					{ this.photosList(findActiveFlat) }
				</div>

				<div className='p2'>{findActiveFlat.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽ в месяц</div>
				<div className='p4'>{findActiveFlat.description}</div>
				<div className='p4'>{findActiveFlat.subway}</div>
			</div>
		</div>)
	}
}