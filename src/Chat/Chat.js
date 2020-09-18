import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.scss";
import InfoBar from "./../InfoBar/InfoBar";
import MessageBox from "./../MessageBox/MessageBox";
import Messages from "./../Messages/Messages";

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
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="container clearfix">
      <div className="chat">
        <InfoBar room={room} />

        <Messages messages={messages} name={name}/>

        <MessageBox
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
