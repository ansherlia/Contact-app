import { FaTrash } from "react-icons/fa";

import styles from "./ContactItem.module.css";

function ContactItem({ contact, deleteHandler = { deleteHandler } }) {
  const { name, lastName, email, numberPhone, id } = contact;
  return (
    <li className={styles.list}>
      <h4>
        {name} {lastName}
      </h4>
      <h4>{email}</h4>
      <h4>{numberPhone}</h4>
      <button onClick={() => deleteHandler(id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default ContactItem;
