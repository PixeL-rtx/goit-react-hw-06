import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div className={css.Form}>
      <p className={css.title}> Phonebook</p>
      <ContactForm />
      <SearchBox />
      <div className={css.ContactList}>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
