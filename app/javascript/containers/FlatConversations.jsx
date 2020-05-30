import React from 'react'
import $ from 'jquery'

import ConversationList from '../components/ConversationList'
import Conversation from '../containers/Conversation'
import UsersPopup from '../components/UsersPopup'
import WannaLivePopup from '../components/WannaLivePopup'


export default class FlatConversations extends React.Component {
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
				flat: {
					name: this.props.flat.name,
					description: this.props.flat.description,
					price: this.props.flat.price,
					subway: this.props.flat.subway,
					conversations: this.props.flat.conversations,
					usersShow: false,
					activeConversation: this.props.flat.conversations[0].id,
					cover: this.props.flat.cover,
					photos: this.props.flat.photos,
					wannaLive: false
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
	      <a href={'../../users/' + user.id} className='p5 dirty_orange'>
	        {user.full_name}
	        <div><div className='spacing-xxxs-h'></div></div>
	        <div className='p4 grey4'>
	          online
	        </div>
	      </a>
	    </div>
			);
		}

		photosList() {
			const {
				photos
			} = this.state.flat;

			const all_photos = [...photos];

			return all_photos.map((photo, index) =>
				<img key={ index } src={ photo } className='photo'></img>
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
						<img src={flat.cover} className='conversation_avatar'></img>
						<h5>{findActiveConversation.title}</h5>
						<div className="users_count_flat grey4" onClick={this.showModal}>{users.length} чел.</div>

						<div className='s_button flat_button'>Мне не нравится</div>
						<div className='s_button primary_button' onClick={this.showSecondModal}>Вселить кандидата</div>
					</div>
					<WannaLivePopup wannaLive={this.state.wannaLive} handleClose={this.hideSecondModal}>
						<div className='wanna_live'></div>
						<div><div className='spacing-xl-h'></div></div>
						<h4>Поздравляем с новым соседом!</h4>
						<div className='close' onClick={this.hideSecondModal}></div>
					</WannaLivePopup>

					<UsersPopup usersShow={this.state.usersShow} handleClose={this.hideModal}>
						<div className='conversation_header'>
							<div className='conversation_avatar'></div>
							<h4>{findActiveConversation.title}</h4>
							<div className="users_count grey4" onClick={this.showModal}>{users.length} чел.</div>
							<div className='close' onClick={this.hideModal}></div>
						</div>

						{ this.userList() }
					</UsersPopup>

					<Conversation conversation={findActiveConversation} cover={flat.cover}/>
				</div>

				<div className='flat_info flat_card'>
					<h5>{flat.name}</h5>
					<img src={flat.cover} className='main_photo'></img>
					<div className='small_photos'>
						{ this.photosList() }
					</div>

					<div className='p2'>{flat.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽ в месяц</div>
					<div className='p4'>{flat.description}</div>
					<div className='p4'>{flat.subway}</div>
				</div> <
				/div>)
			}
		}