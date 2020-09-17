import React from "react";
import "./MessageBox.scss";

function MessageBox({ message, setMessage, sendMessage }) {
  return (
    <div className="chat-message clearfix">
      <textarea
        name="message-to-send"
        id="message-to-send"
        placeholder="Type your message"
        rows="3"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      ></textarea>
      <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
      <i className="fa fa-file-image-o"></i>
      <button>Send</button>
    </div>
  );
}

export default MessageBox;
