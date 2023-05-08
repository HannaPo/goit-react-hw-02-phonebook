import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addContact = (name, number) => {
  //   const newContact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };
  //   const isAlreadyInContacts = this.state.contacts.some(
  //     contact =>
  //       contact.name.toLowerCase() === name.toLowerCase() ||
  //       contact.number === number
  //   );

  //   if (isAlreadyInContacts) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  // };

addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
};
  
  setFilter = filter => {
    this.setState({ filter });
  };

  handleContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleContactDelete}
        />
      </Container>
    );
  }
}
