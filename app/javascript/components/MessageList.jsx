import React from "react";
import PropTypes from "prop-types";

function MessageList(props) {
	const {
		messages
	} = props;

	const messagesList = messages.map((message, index) => (
		<div className='message' key={index}>
      { (message.user.avatar.length > 0)
        ? <img src={ message.user.avatar }></img>
        : <div className='message_photo'></div>
      }
      <div><div className='spacing-xs-w'></div></div>
      <div className='p5 dirty_orange'>
        {message.user.full_name}
        <span className='p6 grey4'>
          &#160; {message.time_sent_at}
        </span>
        <div><div className='spacing-xxxs-h'></div></div>
        <div className='p4'>
          {message.body}
        </div>
      </div>
		</div>
	))
	return (
		<div className="message_list">
      {messagesList}
    </div>
	);
}

export default MessageList;