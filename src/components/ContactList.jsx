import ContactItem from "./ContactItem";

import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      {contacts.length ? (
        <>
          <ul>
            {contacts.map((contact) => (
              <ContactItem
                contact={contact}
                key={contact.id}
                deleteHandler={deleteHandler}
              />
            ))}
          </ul>
        </>
      ) : (
        <><h2>No Contact Yet!</h2></>
      )}
    </div>
  );
}

export default ContactList;
