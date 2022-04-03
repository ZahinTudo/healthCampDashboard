import React from "react";
import {
	DateInputs,
	NormalInputs,
	PhoneInputs,
	SelectInputs,
} from "../../..//ModularComponents/Inputs/Inputs";
import { Button, Col, Form, Modal } from "react-bootstrap";
import "./AddPatient.css";

export default function AddPatient({ props }) {
	const [formData, setFormData] = React.useState({ countryCode: "+91" });
	const [SaveDisable, setSaveDisable] = React.useState(true);
	const handleSubmit = () => {};
	const DataCollect = (e) => {
		e.preventDefault();
		let count = 0;
		const name = e.target.name;
		const val = e.target.value;
		const newData = { ...formData };
		newData[name] = val;
		console.log(newData);
		const dataKeys = Object.keys(formData);
		dataKeys.forEach((item, ind) => {
			if (item !== "Email" || item !== "countryCode") {
				if (item.length > 0) count += 1;
			}
		});
		if (count === 9) {
			setSaveDisable(false);
		} else setSaveDisable(true);
		setFormData(newData);
	};
	const gender = [
		{
			name: "Male",
			value: "Male",
		},
		{ name: "Female", value: "Female" },
	];
	const state = [
		{
			name: "Pune",
			value: "pune",
		},
		{
			name: "Delhi",
			value: "delhi",
		},
		{
			name: "Kolkata",
			value: "kolkata",
		},
	];
	const district = [
		{
			name: "Pune",
			value: "pune",
		},
		{
			name: "Delhi",
			value: "delhi",
		},
		{
			name: "Kolkata",
			value: "kolkata",
		},
	];
	return (
		<div className='px-4 py-5'>
			<Modal.Header closeButton className='border-0'>
				<Modal.Title id='contained-modal-title-vcenter'>
					Patient Registration
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='py-0'>
				<div>
					<NormalInputs
						label={"Aadhar number"}
						required={true}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"Enter 16 digits aadhar number"}
					/>
				</div>
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
				<div className='name my-3 row gx-3 justify-content-between'>
					<SelectInputs
						data={state}
						label={"State"}
						onBlur={DataCollect}
						placeholder={"State"}
						required={true}
					/>
					<SelectInputs
						data={district}
						label={"District"}
						onBlur={DataCollect}
						placeholder={"District"}
						required={true}
					/>
				</div>
				<div className='name my-3 row gx-3 justify-content-between'>
					<PhoneInputs
						label={"Phone"}
						required={true}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"Phone"}
						data={[{ name: "+88", value: "+88" }]}
					/>

					<NormalInputs
						label={"Email"}
						required={false}
						onBlur={DataCollect}
						type={"email"}
						placeholder={"Email"}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
				<Button
					disabled={SaveDisable}
					className='w-50 modalSaveBtn pb-2'
					onClick={props.onHide}>
					Save
				</Button>
			</Modal.Footer>
		</div>
	);
}
