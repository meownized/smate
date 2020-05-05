import React from "react"
import PropTypes from "prop-types"

class ConversationList extends React.Component {
  displayConversation() {}

  conversationsList() {
    const conversations = this.props.conversations

    return conversations.map((conversation, index) => <div className="col-sm-12" key={index}>
      <p className="message-text" onClick={this.displayConversation = this.displayConversation.bind(this)}>
        {conversation.title}
      </p>
    </div>);
  }

  render() {
    return <div className="row" id="chat-box">
      {this.conversationsList()}
    </div>
  }
}

export default ConversationList
