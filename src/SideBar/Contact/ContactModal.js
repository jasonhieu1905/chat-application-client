import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "./../../contexts/ContactsProvider";

function ContactModal({ onClose }) {
  const idRef = useRef();
  const nameRef = useRef();

  const { createContacts } = useContacts();

  const handleSubmit = (event) => {
    event.preventDefault();

    createContacts({ id: idRef.current.value, name: nameRef.current.value });

    onClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default ContactModal;
