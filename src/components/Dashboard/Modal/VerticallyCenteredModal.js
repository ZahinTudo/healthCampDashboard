import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./VerticallyCenteredModal.css";
import OTP from "./OTP/OTP";
import AddPatient from "./AddPatient/AddPatient";
import { Modal } from "react-bootstrap";
import AddUser from "./AddUser/AddUser";
import AddHealthCamp from "./AddHealthCamp/AddHealthCamp";
import EditHealthCamp from "./EditHealthCamp/EditHealthCamp";
import AddRecord from "./AddRecord/AddRecord";
import EditRecord from "./EditRecord/EditRecord";
import EditUser from "./EditUser/EditUser";

export default function VerticallyCenteredModal(props) {
	const { type } = props;
	let comp;
	useEffect(() => {}, []);

	if (type === "otp") {
		comp = <OTP hide={props} />;
	} else if (type === "addpatient") {
		comp = <AddPatient props={props} />;
	} else if (type === "adduser") {
		comp = <AddUser props={props} />;
	} else if (type === "addcamp") {
		comp = <AddHealthCamp props={props} />;
	} else if (type === "editCamp") {
		comp = <EditHealthCamp props={props} />;
	} else if (type === "edituser") {
		comp = <EditUser props={props} />;
	} else if (type === "addrecord") {
		comp = <AddRecord props={props} />;
	} else if (type === "editrecord") {
		comp = <EditRecord props={props} />;
	}
	return (
		<Modal
			{...props}
			// size='lg'
			// backdrop='static'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			{comp}
		</Modal>
	);
}
