import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./VerticallyCenteredModal.css";
import OTP from "./OTP/OTP";
import AddPatient from "./AddPatient/AddPatient";
import { Modal } from "react-bootstrap";
import AddUser from "./AddUser/AddUser";

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
