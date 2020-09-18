import React from "react";

function Message({ message: {user, text}, name }) {
  let isCurrentUser = user === 'admin';

  return (
    <>
      {isCurrentUser ? (
        <li>
          <div className="message-data">
            <span className="message-data-name">
              <i className="fa fa-circle online"></i> Vincent
            </span>
            <span className="message-data-time">10:12 AM, Today</span>
          </div>
          <div className="message my-message">
            {text}
          </div>
        </li>
      ) : (
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">10:10 AM, Today</span> &nbsp;
            &nbsp;
            <span className="message-data-name">Olia</span>{" "}
            <i className="fa fa-circle me"></i>
          </div>
          <div className="message other-message float-right">
            {text}
          </div>
        </li>
      )}
    </>
  );
}

export default Message;
