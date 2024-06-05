import { useState } from "react";
import styles from "./Form.module.css";
function Form() {
	const [data, setData] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: 0,
	});
	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setData((data) => ({ ...data, [name]: value }));
	};
	const addHandler = () => {
		console.log(data);
	};
	return (
		<div className={styles.container}>
			<div>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={data.name}
					onChange={changeHandler}
				/>
				<input
					type="text"
					placeholder="Last Name"
					name="lastName"
					value={data.lastName}
					onChange={changeHandler}
				/>
			</div>
			<div>
				<input
					type="Email"
					placeholder="Email"
					name="email"
					value={data.email}
					onChange={changeHandler}
				/>
				<input
					type="number"
					placeholder="Phone"
					name="phone"
					value={data.phone}
					onChange={changeHandler}
				/>
			</div>
			<button type="submit" onClick={addHandler}>
				Add Contact
			</button>
		</div>
	);
}

export default Form;
