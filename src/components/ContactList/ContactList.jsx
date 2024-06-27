import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
