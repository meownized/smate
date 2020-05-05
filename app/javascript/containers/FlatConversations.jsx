import React from 'react'
import $ from 'jquery'

import ConversationList from '../components/ConversationList'
import Conversation from '../containers/Conversation'

export default class FlatConversations extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    // this.userList = this.userList.bind(this)

    this.state = {
      flat: {
        users: this.props.flat.users,
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

  // userList(){
  //   const {users} = this.state.flat;
  //   const all_users = [...users];
  //
  //   return all_users.map((user, index) =>
  //     <div className="col-sm-12" key={index}>
  //       <p className="message-text">
  //         {user.full_name}
  //       </p>
  //     </div>
  //   );
  // }

  render() {
    const {conversations, activeConversation, users} = this.state.flat;
    const {messages} = conversations;

    const findActiveConversation = (conversations, activeConversation) => {
      return conversations.find(
        conversation => conversation.id === activeConversation
      );
    };

    return (<div className="conversation_container" >
      <ConversationList
        className="flat_conversation"
        conversations={conversations}
        handleClick={this.handleClick}
      />
    <div className="conversation">
      <div className="users_count">{ users.length } участника</div>
      <Conversation
        conversation={
          findActiveConversation(
            conversations,
            activeConversation
          )}
          />
    </div>
    </div>)
  }
}
