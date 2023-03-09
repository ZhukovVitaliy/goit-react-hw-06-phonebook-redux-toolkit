import { GlobalStyle } from '../../GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Container } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <Container>
        <ContactForm />
      </Container>

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
