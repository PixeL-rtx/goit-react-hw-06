import css from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <ul>
        <li className={css.itemContact}>
          <IoIosContact />
          <p>{name}</p>
        </li>
        <li className={css.itemContact}>
          <MdPhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
