import React from "react";
import Activities from "../Activities/Activities";
import Records from "../Records/Records";
import "./Users.css";

export default function Users() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='w-100 p-4 UserScreen'>
			<h3>Users</h3>
			<div className='user_prts' style={{ height: "88vh" }}>
				<div className='records bg-white w-100' style={{ height: "" }}>
					<Records />
				</div>

				<Activities />
			</div>
		</div>
	);
}
