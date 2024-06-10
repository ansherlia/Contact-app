import CourseItem from "./ContactItem.jsx";
import styles from "./CourseItem.module.css";
function ContactList({ contacts, deleteHandler }) {
	return (
		<div className={styles.style}>
			<h2>Contact List</h2>
			{contacts.length ? (
				<ul>
					{contacts.map((contact) => (
						<CourseItem
							key={contact.id}
							data={contact}
							deleteHandler={deleteHandler}
						/>
					))}
				</ul>
			) : (
				<p className={styles.para}>No Contact Yet!</p>
			)}
		</div>
	);
}

export default ContactList;
