import React from "react";
import {
	DateInputs,
	NormalInputs,
	PhoneInputs,
	SelectInputs,
} from "../../..//ModularComponents/Inputs/Inputs";
import { Button, Col, Form, Modal } from "react-bootstrap";
import "./EditHealthCamp.css";
import DragAndDrop from "../../../ModularComponents/DragAndDrop/DragAndDrop";
import TextAreaInput from "../../../ModularComponents/TextAreaInput/TextAreaInput";

export default function EditHealthCamp({ props }) {
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
		// console.log(newData);
		setFormData(newData);
		const dataKeys = Object.keys(newData);
		dataKeys.forEach((item, ind) => {
			if (item !== "Email" || item !== "countryCode") {
				if (newData[item].length > 0) count += 1;
			}
		});
		if (count === 9) {
			setSaveDisable(false);
		} else setSaveDisable(true);
	};

	const Location = [
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
					Edit healthcamp
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='py-0'>
				<div className='my-3'>
					{/* <DragAndDrop /> */}
					<div className='CampImage'>
						<img
							src='/assets/images/CampDummyImage.png'
							alt=''
							className='img-fluid'
						/>
					</div>
				</div>
				<div>
					<NormalInputs
						label={"Title"}
						required={false}
						onBlur={DataCollect}
						type={"text"}
						placeholder={"Healthcamp name"}
					/>
				</div>

				<div className='name my-3 row gx-3 justify-content-between'>
					<SelectInputs
						data={Location}
						label={"Location"}
						onBlur={DataCollect}
						placeholder={"Location"}
						required={true}
					/>
					<DateInputs
						label={"Date of birth"}
						required={true}
						onBlur={DataCollect}
						type={"date"}
						placeholder={"MM/DD/YYYY"}
					/>
				</div>
				<div>
					<TextAreaInput
						label={"Heathcamp Description"}
						required={false}
						onBlur={DataCollect}
						placeholder={"Description"}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
				<Button
					disabled={SaveDisable}
					className='w-50 modalSaveBtn pb-2'
					onClick={props.onHide}>
					Confirm
				</Button>
			</Modal.Footer>
		</div>
	);
}
