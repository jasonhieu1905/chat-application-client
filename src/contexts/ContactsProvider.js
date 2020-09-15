import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";

const ContactContext = createContext();

export function useContacts() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContacts({ id, name }) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }

  return (
    <ContactContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactContext.Provider>
  );
}
