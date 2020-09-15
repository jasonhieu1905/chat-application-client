import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "./../../contexts/ContactsProvider";
import { useConversations } from "./../../contexts/ConversationsProvider";

function ConversationModal({ onClose }) {
  const [selectedContactsId, setSelectedContactsId] = useState([]);

  const { createConversation } = useConversations();
  const { contacts } = useContacts();

  const handleSubmit = (event) => {
    event.preventDefault();

    createConversation(selectedContactsId);

    onClose();
  };

  const handleCheckboxChange = (contactId) => {
    setSelectedContactsId((prevSelectedContactsId) => {
      if (prevSelectedContactsId.includes(contactId)) {
        return prevSelectedContactsId.filter(
          (selectedContactId) => selectedContactId !== contactId
        );
      }
      return [...prevSelectedContactsId, contactId];
    });
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create Conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactsId.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit" onSubmit={handleSubmit}>
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default ConversationModal;
