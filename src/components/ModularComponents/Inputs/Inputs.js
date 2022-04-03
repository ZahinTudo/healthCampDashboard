import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "jquery";
import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import "./Inputs.css";
import {
	faCalendar,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export function NormalInputs({ type, required, placeholder, label, onBlur }) {
	return (
		<Form.Group className=' ' as={Col} md='' controlId=''>
			<Form.Label className={required ? "required" : ""}>
				{label}
			</Form.Label>
			<Form.Control
				className='p-3'
				onBlur={onBlur}
				required={required}
				name={label}
				type={type}
				placeholder={placeholder}
			/>
		</Form.Group>
	);
}
export function DateInputs({ type, required, placeholder, label, onBlur }) {
	return (
		<Form.Group className=' ' as={Col} md='' controlId='date'>
			<Form.Label className={required ? "required" : ""}>
				{label}
			</Form.Label>
			<div className='position-relative'>
				<Form.Control
					className='p-3'
					onBlur={onBlur}
					required={require}
					name={label}
					type={type}
					placeholder={placeholder}
				/>
				<span
					className='position-absolute '
					style={{
						top: "50%",
						right: "10%",
						color: "#076EB3",
						transform: "translate(-10%,-50%)",
					}}>
					<FontAwesomeIcon icon={faCalendar} />
				</span>
			</div>
		</Form.Group>
	);
}
export function PhoneInputs({
	data,
	type,
	required,
	placeholder,
	label,
	onBlur,
}) {
	return (
		<Form.Group className=' ' as={Col} md='' controlId=''>
			<Form.Label className={required ? "required" : ""}>
				{label}
			</Form.Label>
			<div className='d-flex'>
				<Form.Select
					onBlur={onBlur}
					className='grayDefault p-3 CountryCode'
					name={"countryCode"}
					aria-label={label}>
					<option value='+91'>+91</option>

					{data.map((item, ind) => (
						<option key={ind} value={item.value}>
							{item.name}
						</option>
					))}
				</Form.Select>
				<Form.Control
					className='p-3 phoneInput'
					onBlur={onBlur}
					required={required}
					name={label}
					type={type}
					placeholder={placeholder}
				/>
			</div>
		</Form.Group>
	);
}
export function SelectInputs({ data, required, placeholder, label, onBlur }) {
	return (
		<Form.Group className='' as={Col} md='' controlId=''>
			<Form.Label className={required ? "required" : ""}>
				{label}
			</Form.Label>
			<Form.Select
				onBlur={onBlur}
				className='grayDefault p-3'
				name={label}
				required={`${required}`}
				aria-label={label}>
				<option value='0' hidden>
					{placeholder}
				</option>

				{data.map((item, ind) => (
					<option key={ind} value={item.value}>
						{item.name}
					</option>
				))}
			</Form.Select>
		</Form.Group>
	);
}
export function PassInputs({ placeholder, label }) {
	const [passIcon, setPassIcon] = React.useState(false);
	const [passType, setPassType] = React.useState(true);
	return (
		<div className='my-2'>
			<label htmlFor='pass'>{label}</label>
			<div className='position-relative'>
				<FormControl
					className='p-3'
					id='pass'
					placeholder={placeholder}
					type={passType ? "password" : "text"}
					aria-label='password'
				/>
				<span
					onClick={() => {
						setPassIcon(!passIcon);
						setPassType(!passType);
					}}
					className='position-absolute'
					style={{
						top: "50%",
						right: "10%",
						transform: "translate(-10%,-50%)",
					}}>
					<FontAwesomeIcon icon={passIcon ? faEye : faEyeSlash} />
				</span>
			</div>
		</div>
	);
}
