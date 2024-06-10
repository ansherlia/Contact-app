import { useState } from "react";
import ContactList from "./ContactList.jsx";
import inputs from "../constanst/inputs.js";
import { v4 } from "uuid";
import styles from "./Form.module.css";
function Form() {
	const [alert, setAlert] = useState("");
	const [contacts, setContacts] = useState([]);
	const [data, setData] = useState({
		id: "",
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});
	const deleteHandler = (id) => {
		const filtered = contacts.filter((contact) => contact.id !== id);
		setContacts(filtered);
	};
	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setData((data) => ({ ...data, [name]: value }));
	};
	const newContact = { ...data, id: v4() };
	const addHandler = () => {
		if (!data.name || !data.lastName || !data.email || !data.phone) {
			setAlert("Please Enter Valid Data!");
			return;
		}
		setAlert("");
		setContacts((contacts) => [...contacts, newContact]);
	};
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.form}>
					{inputs.map((input) => (
						<input
							key={input.id}
							type={input.type}
							placeholder={input.placeholder}
							name={input.name}
							onChange={changeHandler}
						/>
					))}
					<button type="submit" onClick={addHandler}>
						Add Contact
					</button>
				</div>
			</div>
			<div className={styles.alert}>{alert && <p>{alert}</p>}</div>
			<ContactList contacts={contacts} deleteHandler={deleteHandler} />
		</div>
	);
}

export default Form;
