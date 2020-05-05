import React from 'react'
import $ from 'jquery'

import ConversationList from '../components/ConversationList'
import Conversation from '../containers/Conversation'

export default class FlatConversations extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      flat: {
        conversations: this.props.flat.conversations,
        activeConversation: 1
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

    this.setState({ newState });
  };

  render() {
    const {conversations, activeConversation} = this.state.flat;
    const {messages} = conversations;

    const findActiveConversation = (conversations, activeConversation) => {
      return conversations.find(
        conversation => conversation.id === activeConversation
      );
    };

    return (<div className={activeConversation} >
      <ConversationList
        conversations={conversations}
        handleClick={this.handleClick}
      />
      <Conversation
        className={activeConversation}
        conversation={
          findActiveConversation(
            conversations,
            activeConversation
        )}
      />
    </div>)
  }
}
