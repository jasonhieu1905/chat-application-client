import React from "react";
import { useConversations } from "./../../contexts/ConversationsProvider";
import { ListGroup } from "react-bootstrap";

function Conversation() {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={conversation.id}
          onClick={() => selectConversationIndex(index)}
          action
          active={conversation.selected}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversation;
