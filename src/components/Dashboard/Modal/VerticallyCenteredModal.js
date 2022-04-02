import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import $ from "jquery";
import "./VerticallyCenteredModal.css";
import OTP from "./OTP/OTP";
import {
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";

export default function VerticallyCenteredModal(props) {
	const gender = [
		{
			value: "Male",
		},
		{ value: "Female" },
	];
	const [formData, setFormData] = useState({});
	const DataCollect = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const val = e.target.value;
		const newData = { ...formData };
		newData[name] = val;
		console.log(newData);
		setFormData(newData);
	};
	useEffect(() => {}, []);
	return (
		<Modal
			{...props}
			// size='lg'
			// backdrop='static'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			{props.type === "otp" ? (
				<OTP hide={props} />
			) : (
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
							<NormalInputs
								label={"Age"}
								required={true}
								onBlur={DataCollect}
								type={"number"}
								placeholder={"Age"}
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
							<Form.Group
								className=' '
								as={Col}
								md=''
								controlId=''>
								<Form.Label className='required'>
									State
								</Form.Label>
								<Form.Select
									className='grayDefault'
									name='state'
									aria-label='State'
									onBlur={DataCollect}>
									<option value='0' hidden>
										State
									</option>
									<option value='1'>One</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group
								className=''
								as={Col}
								md=''
								controlId=''>
								<Form.Label className='required'>
									District
								</Form.Label>
								<Form.Select
									onBlur={DataCollect}
									name='district'
									className='grayDefault'
									aria-label='District'>
									<option value='0' hidden>
										District
									</option>
									<option value='1'>One</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</Form.Select>
							</Form.Group>
						</div>
						<div className='name my-3 row gx-3 justify-content-between'>
							<Form.Group
								className=' '
								as={Col}
								md=''
								controlId=''>
								<Form.Label className='required'>
									Phone Number
								</Form.Label>
								<Form.Control
									onBlur={DataCollect}
									required
									type='text'
									placeholder='Phone Number'
								/>
							</Form.Group>
							<Form.Group
								className=''
								name='email'
								as={Col}
								md=''
								controlId=''>
								<Form.Label className=''>Email</Form.Label>
								<Form.Control
									onBlur={DataCollect}
									type='email'
									placeholder='Email'
								/>
							</Form.Group>
						</div>
					</Modal.Body>
					<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
						<Button
							className='w-50 modalSaveBtn pb-2'
							onClick={props.onHide}>
							Save
						</Button>
					</Modal.Footer>
				</div>
			)}
		</Modal>
	);
}
