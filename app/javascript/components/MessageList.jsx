import React from "react";
import PropTypes from "prop-types";

function MessageList(props) {
  const {messages} = props;
	const messagesList = messages.map((message, index) => (
		<div className="col-sm-12" key={index}>
			<p className="message-text">
				<span className="text-muted">
					{message.user.full_name}
					&#160; at {message.written_at}
					says
				</span>
				<br /> {message.body}
			</p>
		</div>
	))
  return (
    <div className="row" id="chat-box">
      {messagesList}
    </div>
  );
}

export default MessageList;
