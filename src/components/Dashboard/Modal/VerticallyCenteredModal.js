import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import $ from "jquery";
import "./VerticallyCenteredModal.css";
import OTP from "./OTP/OTP";

export default function VerticallyCenteredModal(props) {
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
				<>
					<Modal.Header closeButton className='border-0'>
						<Modal.Title id='contained-modal-title-vcenter'>
							Patient Registration
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className='py-0'>
						<div className='name my-3 row gx-3 justify-content-between'>
							<Form.Group
								className=' '
								as={Col}
								md=''
								controlId='validationCustom01'>
								<Form.Label className='required'>
									First name
								</Form.Label>
								<Form.Control
									onBlur={DataCollect}
									required
									name='firstName'
									type='text'
									placeholder='First name'
								/>
							</Form.Group>
							<Form.Group
								className=''
								as={Col}
								md=''
								controlId='validationCustom01'>
								<Form.Label className='required'>
									Last name
								</Form.Label>
								<Form.Control
									onBlur={DataCollect}
									required
									name='lastName'
									type='text'
									placeholder='Last name'
								/>
							</Form.Group>
						</div>
						<div className='name my-3 row gx-3 justify-content-between'>
							<Form.Group
								className=' '
								as={Col}
								md=''
								controlId='validationCustom01'>
								<Form.Label className='required'>
									Age
								</Form.Label>
								<Form.Control
									onBlur={DataCollect}
									required
									name='Age'
									type='text'
									placeholder='Age'
								/>
							</Form.Group>
							<Form.Group
								className=''
								as={Col}
								md=''
								controlId='validationCustom01'>
								<Form.Label className='required'>
									Gender
								</Form.Label>
								<Form.Select
									onBlur={DataCollect}
									className='grayDefault'
									name='gender'
									aria-label='gender'>
									<option value='0' hidden>
										Gender
									</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
								</Form.Select>
							</Form.Group>
						</div>
						<div className='name my-3 row gx-3 justify-content-between'>
							<Form.Group
								className=' '
								as={Col}
								md=''
								controlId='validationCustom01'>
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
								controlId='validationCustom01'>
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
								controlId='validationCustom01'>
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
								controlId='validationCustom01'>
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
				</>
			)}
		</Modal>
	);
}
