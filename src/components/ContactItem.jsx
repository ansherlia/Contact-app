import styles from "./ContactItemStyle.module.css"
function CourseItem({
	data: { id, name, lastName, phone, email },
	deleteHandler={ deleteHandler },
}) {
	return (
		<li key={id} className={styles.container}>
			<p>
				{name} {lastName}
			</p>
			<p>
				<span>{email} </span>
				<i className="fa-brands fa-mailchimp"></i>
			</p>
			<p>
				{phone} <i className="fa-solid fa-phone-volume"></i>
			</p>
			<button onClick={() => deleteHandler(id)}>
				
				<i className="fa-solid fa-trash"></i>
			</button>
		</li>
	);
}

export default CourseItem;
