import React from "react";
import Activities from "../Activities/Activities";
import Records from "../Records/Records";
import "./Users.css";

export default function Users(props) {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='w-100 p-4 UserScreen'>
			<div className='d-flex align-items-center '>
				{props.children}
				<h3 className='screenTitle mb-0'>Users</h3>
			</div>
			<div className='user_prts' style={{ height: "86vh" }}>
				<div className='records bg-white w-100' style={{ height: "" }}>
					<Records />
				</div>

				<Activities add={false} />
			</div>
		</div>
	);
}
