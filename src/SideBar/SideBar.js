import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversation from "./Conversation/Conversation";
import Contact from "./Contact/Contact";
import ConversationModal from "./Conversation/ConversationModal";
import ContactModal from "./Contact/ContactModal";

const conversationKey = "conversation";
const contactKey = "contact";

function SideBar({ id }) {
  const [activeTab, setActiveTab] = useState(conversationKey);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const conversationOpen = activeTab === conversationKey;

  return (
    <div style={{ width: 250 }} className="d-flex flex-column">
      <Tab.Container defaultActiveKey={activeTab} onSelect={setActiveTab}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={conversationKey}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={contactKey}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={conversationKey}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={contactKey}>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setShowModal(true)} className="rounded-0">
          New {conversationOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        {conversationOpen ? <ConversationModal onClose={handleCloseModal} /> : <ContactModal onClose={handleCloseModal}  />}
      </Modal>
    </div>
  );
}

export default SideBar;
