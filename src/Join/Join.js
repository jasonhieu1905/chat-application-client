import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container
      className="aligns-item-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control
            onChange={(event) => setName(event.target.value)}
            type="text"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Room</Form.Label>
          <Form.Control
            onChange={(event) => setRoom(event.target.value)}
            type="text"
            required
          ></Form.Control>
        </Form.Group>
        <Link
          onClick={(event) =>
            name === "" || room === "" ? event.preventDefault() : null
          }
          to={`/chat?name=${name}&room=${room}`}
        >Join</Link>
      </Form>
    </Container>
  );
}

export default Join;
