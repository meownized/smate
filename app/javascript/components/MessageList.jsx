import React from "react"
import PropTypes from "prop-types"

class MessageList extends React.Component {
  messagesList() {
    const messages = this.props.messages
    console.log('Все сообщения', messages);
    return messages.map((message, index) => <div className="col-sm-12" key={index}>
      <p className="message-text">
        <span className="text-muted">
          {message.user.full_name}
          &#160; at {message.written_at}
          says</span>
        <br/> {message.body}
      </p>
    </div>);
  }

  render() {
    return <div className="row" id="chat-box">
      {this.messagesList()}
    </div>
  }
}

export default MessageList
