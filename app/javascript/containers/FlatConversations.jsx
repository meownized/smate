import React from 'react'
import $ from 'jquery'

import ConversationList from '../components/ConversationList'

export default class FlatConversations extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flat: {
        conversations: this.props.flat.conversations
      }
    }
  }

  render() {
    const {conversations} = this.state.flat
    console.log(conversations);
    return (<div className="ingredients">
      <ConversationList conversations={conversations}/>
    </div>)
  }
}
