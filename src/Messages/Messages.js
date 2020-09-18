import React from "react";
import "./Messages.scss";
import Message from './../Message/Message';

function Messages({messages, name}) {
  return (
    <div className="chat-history">
      <ul>
        {messages.map((message, index) => <Message key={index} message={message} />)}
      </ul>
    </div>
  );
}

export default Messages;
