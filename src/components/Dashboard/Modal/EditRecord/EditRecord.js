import React from "react";
import {
	DateInputs,
	NormalInputs,
	PhoneInputs,
	SelectInputs,
} from "../../..//ModularComponents/Inputs/Inputs";
import { Button, Col, Form, Modal } from "react-bootstrap";
import DragAndDrop from "../../../ModularComponents/DragAndDrop/DragAndDrop";
import TextAreaInput from "../../../ModularComponents/TextAreaInput/TextAreaInput";
import "./EditRecord.css";
import UploadInput from "../../../ModularComponents/UploadInput/UploadInput";

export default function EditRecord({ props }) {
	const [formData, setFormData] = React.useState({});
	const [SaveDisable, setSaveDisable] = React.useState(false);
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
			if (item !== "Email" || item !== "countryCode") {
				if (newData[item].length > 0) count += 1;
			}
		});
		// if (count === 9) {
		// 	setSaveDisable(false);
		// } else setSaveDisable(true);
	};

	const type = [
		{
			name: "Prescription",
			value: "Prescription",
		},
		{
			name: "Report",
			value: "Report",
		},
		{
			name: "Other",
			value: "Other",
		},
	];

	return (
		<div className='px-4 py-5'>
			<Modal.Header closeButton className='border-0'>
				<Modal.Title id='contained-modal-title-vcenter'>
					Edit Healthrecord
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='py-0'>
				{/* <UploadInput Btntype={"Upload"} /> */}

				<div>
					<NormalInputs
						label={"Reference name"}
						required={false}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"Reference name"}
					/>
				</div>

				<div className='name my-3 row gx-3 justify-content-between'>
					<SelectInputs
						data={type}
						label={"Type of record"}
						onBlur={DataCollect}
						placeholder={"Prescription/report/others"}
						required={false}
					/>
					<DateInputs
						label={"Date of document"}
						required={false}
						onBlur={DataCollect}
						type={"date"}
						placeholder={"DD/MM/YYYY"}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
				<Button
					disabled={SaveDisable}
					className='w-50 modalSaveBtn'
					onClick={props.onConfirm}>
					Confirm
				</Button>
			</Modal.Footer>
		</div>
	);
}
