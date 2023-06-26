import React from 'react';
import { ListContacts } from './ListContacts.styled';
import { ListPhone } from './ListPhone.styled';
import { ButtonDelete } from './ButtonDelete.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListContacts key={contact.id}>
          <span>{contact.name}</span>:<ListPhone>{contact.number}</ListPhone>
          <ButtonDelete
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </ButtonDelete>
        </ListContacts>
      ))}
    </ul>
  );
};
