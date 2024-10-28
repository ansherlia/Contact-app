import { useState } from "react";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import ContactList from "./ContactList";

import styles from "./Form.module.css";

function Form() {
  const [data, setData] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    numberPhone: null,
  });
  const [contacts, setContact] = useState([]);
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const newContacts = { ...data, id: v4() };
  const addHandler = () => {
      event.preventDefault();
    if (!data.name || !data.email || !data.lastName || !data.numberPhone)
      return;
    setContact((contacts) => [...contacts, newContacts]);
  };

  const deleteHandler = (id) => {
    const filterData = contacts.filter((contact) => contact.id !== id);
    setContact(filterData);
  };

  return (
    <div>
      <form className={styles.form}>
        {inputs.map((input) => (
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            key={input.id}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add contact</button>
      </form>

      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Form;
