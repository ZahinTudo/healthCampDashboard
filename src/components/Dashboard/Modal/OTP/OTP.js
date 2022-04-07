import React, { useEffect } from "react";
import "./OTP.css";
import { Button, Modal } from "react-bootstrap";
import $ from "jquery";

export default function OTP({ hide }) {
	function OTPInput() {
		const inputs = document.querySelectorAll('input[type="text"]');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener("keydown", function (event) {
				if (event.key === "Backspace") {
					inputs[i].value = "";
					if (i !== 0) inputs[i - 1].focus();
				} else {
					if (i === inputs.length - 1 && inputs[i].value !== "") {
						return true;
					} else if (event.keyCode > 47 && event.keyCode < 58) {
						inputs[i].value = event.key;
						if (i !== inputs.length - 1) inputs[i + 1].focus();
						event.preventDefault();
					} else if (event.keyCode > 64 && event.keyCode < 91) {
						inputs[i].value = String.fromCharCode(event.keyCode);
						if (i !== inputs.length - 1) inputs[i + 1].focus();
						event.preventDefault();
					}
				}
			});
		}
	}

	useEffect(() => {
		// console.log($('input[type="text"]').eq());
		OTPInput();
	}, []);
	return (
		<div className='otp position-relative p-5'>
			<Modal.Header closeButton className='border-0'>
				<Modal.Title id='contained-modal-title-vcenter'>
					<div className='text-center'>
						<h3>OTP verification</h3>
						<p className='fs-6'>
							OTP sent to Alina’s mobile number 9826xxx567. Enter
							to view patient details.
						</p>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='py-0'>
				<div className='d-flex justify-content-center verification-code--inputs'>
					<input type='text' maxlength='1' />
					<input type='text' maxlength='1' />
					<input type='text' maxlength='1' />
					<input type='text' maxlength='1' />
				</div>
				<div className='text-center my-3'>Resend in 59 secs</div>
			</Modal.Body>
			<Modal.Footer className='border-0 justify-content-center px-5 py-2 '>
				<Button className='w-50 modalSaveBtn' onClick={hide.onConfirm}>
					Confirm
				</Button>
			</Modal.Footer>
		</div>
	);
}
