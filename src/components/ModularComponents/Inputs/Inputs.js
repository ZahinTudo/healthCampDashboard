import { data } from "jquery";
import React from "react";
import { Col, Form } from "react-bootstrap";
import "./Inputs.css";

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
				aria-label={label}>
				<option value='0' hidden>
					{placeholder}
				</option>

				{data.map((item, ind) => (
					<option key={ind} value={item.value}>
						{item.value}
					</option>
				))}
			</Form.Select>
		</Form.Group>
	);
}
