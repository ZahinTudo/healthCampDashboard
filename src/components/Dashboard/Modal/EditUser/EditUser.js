import React from "react";
import {
	DateInputs,
	NormalInputs,
	PhoneInputs,
	SelectInputs,
} from "../../..//ModularComponents/Inputs/Inputs";
import { Button, Col, Form, Modal } from "react-bootstrap";
import "./EditUser.css";

import UploadInput from "../../../ModularComponents/UploadInput/UploadInput";

export default function EditUser({ props }) {
	const [formData, setFormData] = React.useState({});
	const [SaveDisable, setSaveDisable] = React.useState(true);
	const handleSubmit = () => {};
	const DataCollect = (e) => {
		e.preventDefault();
		let count = 0;
		const name = e.target.name;
		const val = e.target.value;
		const newData = { ...formData };
		newData[name] = val;
		// console.log(newData);

		setFormData(newData);
		const dataKeys = Object.keys(newData);
		dataKeys.forEach((item, ind) => {
			if (newData[item].length > 0) count += 1;
		});

		console.log(count, formData, newData);

		if (count === 6) {
			setSaveDisable(false);
		} else setSaveDisable(true);
	};
	const gender = [
		{
			name: "Male",
			value: "Male",
		},
		{ name: "Female", value: "Female" },
	];
	const role = [
		{
			name: "Admin",
			value: "admin",
		},
		{
			name: "Patient",
			value: "patient",
		},
	];
	const docType = [
		{
			name: "Passport",
			value: "passport",
		},
		{
			name: "Adhar card",
			value: "adhar",
		},
	];
	return (
		<div className='px-4 py-5'>
			<Modal.Header closeButton className='border-0'>
				<Modal.Title id='contained-modal-title-vcenter'>
					Edit user
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='py-0'>
				<div className='name my-3 row gx-3 justify-content-between'>
					<NormalInputs
						label={"First name"}
						required={true}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"First name"}
					/>
					<NormalInputs
						label={"Last name"}
						required={true}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"Last name"}
					/>
				</div>
				<div className='name my-3 row gx-3 justify-content-between'>
					<DateInputs
						label={"Date of birth"}
						required={true}
						onBlur={DataCollect}
						type={"date"}
						placeholder={"MM/DD/YYYY"}
					/>
					<SelectInputs
						data={gender}
						label={"Gender"}
						onBlur={DataCollect}
						placeholder={"Gender"}
						required={true}
					/>
				</div>
				<div className='my-3'>
					<SelectInputs
						data={role}
						label={"Role"}
						onBlur={DataCollect}
						placeholder={"Admin"}
						required={true}
					/>
				</div>
				<div className='my-3'>
					<SelectInputs
						data={docType}
						label={"Type of document "}
						onBlur={DataCollect}
						placeholder={"Passport"}
						required={true}
					/>
				</div>
				<UploadInput Btntype={"Re-Upload"} />
			</Modal.Body>
			<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
				<Button
					disabled={SaveDisable}
					className='w-50 modalSaveBtn'
					onClick={props.onHide}>
					Save
				</Button>
			</Modal.Footer>
		</div>
	);
}
