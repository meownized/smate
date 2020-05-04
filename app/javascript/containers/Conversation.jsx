import React from "react"
import PropTypes from "prop-types"
import MessageList from "../components/MessageList"

class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.postMessage = this.postMessage.bind(this)
    this.newMessage = this.newMessage.bind(this)

    this.state = {
      conversation: {
        messages: this.props.conversation.messages,
        onlineUsers: [] // Need to implement this functionality
      }
    };
  }

  newMessage(message) {
    const {messages} = this.state.conversation;

    const msgs = [...messages];

    if (msgs.length >= 15) {
      msgs.shift();
    }

    msgs.push(message);

    let newState = this.state
    newState.conversation.messages = msgs

    this.setState({newState})
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
        console.log(data);
        this.newMessage(data);
      }
    });
  }

  form() {
    return (<div className="col-sm-12">
      <form className="form-inline" onSubmit={this.postMessage}>
        <div className="form-group col-sm-11">
          <input style={{
              width: "100%"
            }} ref="body" type="text" className="form-control" placeholder="Text..."/>
        </div>
        <div className="form-group col-sm-1">
          <button type="submit" className="btn btn-primary">send</button>
        </div>
      </form>
    </div>)
  }

  render() {
    const {messages} = this.state.conversation;

    return (<div className="row">
      <div className="col-sm-12">
        <MessageList messages={messages}/>
      </div>

      {this.form()}
    </div>)
  }
}

export default Conversation
