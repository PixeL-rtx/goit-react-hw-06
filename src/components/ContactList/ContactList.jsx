import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  const filters = useSelector((state) => state.filters.name);

  const visibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters)
  );

  return (
    <ul className={css.list}>
      {visibleContact.map((data) => {
        <li className={css.ContactList}>
          <Contact key={data.id} data={data} />
        </li>;
      })}
    </ul>
  );
};

export default ContactList;
