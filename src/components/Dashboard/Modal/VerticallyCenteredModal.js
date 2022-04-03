import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./VerticallyCenteredModal.css";
import OTP from "./OTP/OTP";
import AddPatient from "./AddPatient/AddPatient";
import { Modal } from "react-bootstrap";

export default function VerticallyCenteredModal(props) {
	useEffect(() => {}, []);
	return (
		<Modal
			{...props}
			// size='lg'
			// backdrop='static'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			{props.type === "otp" ? <OTP hide={props} /> : <AddPatient props={props} />}
		</Modal>
	);
}
