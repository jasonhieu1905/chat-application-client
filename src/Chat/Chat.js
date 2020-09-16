import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import './Chat.scss';
import InfoBar from './../InfoBar/InfoBar';

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setRoom(room);

    socket = io(ENDPOINT);
    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="container clearfix">
      <div className="chat">
        <InfoBar room={room}/>

        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time">10:10 AM, Today</span> &nbsp;
                &nbsp;
                <span className="message-data-name">Olia</span>{" "}
                <i className="fa fa-circle me"></i>
              </div>
              <div className="message other-message float-right">
                Hi Vincent, how are you? How is the project coming along?
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <i className="fa fa-circle online"></i> Vincent
                </span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                Are we meeting today? Project has been already finished and I
                have results to show you.
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time">10:14 AM, Today</span> &nbsp;
                &nbsp;
                <span className="message-data-name">Olia</span>{" "}
                <i className="fa fa-circle me"></i>
              </div>
              <div className="message other-message float-right">
                Well I am not sure. The rest of the team is not here yet. Maybe
                in an hour or so? Have you faced any problems at the last phase
                of the project?
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <i className="fa fa-circle online"></i> Vincent
                </span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                Actually everything was fine. I'm very excited to show this to
                our team.
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <i className="fa fa-circle online"></i> Vincent
                </span>
                <span className="message-data-time">10:31 AM, Today</span>
              </div>
              <i className="fa fa-circle online"></i>
            </li>
          </ul>
        </div>

        <div className="chat-message clearfix">
          <textarea
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows="3"
          ></textarea>
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o"></i>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
