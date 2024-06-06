import { useState } from "react";
import styles from "./Form.module.css";
import ContactList from "./ContactList.jsx";
const inputs = [
	{ type: "text", placeholder: "Name", name: "name" },
	{ type: "text", placeholder: "Last Name", name: "lastName" },
	{ type: "email", placeholder: "Email", name: "email" },
	{ type: "number", placeholder: "Phone", name: "phone" },
];
function Form() {
	const [alert, setAlert] = useState("");
	const [contacts, setContacts] = useState([]);
	const [data, setData] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});
	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setData((data) => ({ ...data, [name]: value }));
	};
	const addHandler = () => {
		if (!data.name || !data.lastName || !data.email || !data.phone) {
			setAlert("Please Enter Valid Data!");
			return;
		}
		setAlert("");
		setContacts((contacts) => [...contacts, data]);
		console.log(contacts);
	};
	return (
		<div>
			<div>
				<div className={styles.container}>
					{inputs.map((input,index) => (
						<input
							key={index}
							type={input.type}
							placeholder={input.placeholder}
							name={input.name}
							value={data[input.name]}
							onChange={changeHandler}
						/>
					))}
					<button type="submit" onClick={addHandler}>
						Add Contact
					</button>
				</div>
			</div>
			<div>{alert && <p>{alert}</p>}</div>
			<ContactList contacts={contacts} />
		</div>
	);
}

export default Form;
