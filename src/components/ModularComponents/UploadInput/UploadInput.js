import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./UploadInput.css";
export default function UploadInput({ Btntype }) {
	const uploadHandle = () => {
		document.querySelector("#uploadFile").click();
	};
	const fileUpload = ({ target }) => {
		const file = target.files[0];
		console.log(file, file.name);
	};
	return (
		<div className='d-flex w-100 align-items-center justify-content-between'>
			<div className='col'>
				<h4 className='fw-bold text-capitalize'>
					{Btntype === "Upload" && "Upload"} id proof
				</h4>
				{Btntype === "Re-Upload" ? (
					<div className='d-flex text-info'>
						<a target='_blank' href='#'>
							view
						</a>
						<span className='mx-2'>|</span>
						<a href='#' rel='noreferrer' download>
							download
						</a>
					</div>
				) : (
					""
				)}
				<p>
					(Document to be uploaded should be in pdf format and the
					file size should be 5MB only)
				</p>
			</div>
			<div className='col text-end' onClick={uploadHandle}>
				<input
					onChange={fileUpload}
					hidden
					className=''
					id='uploadFile'
					style={{ width: "0" }}
					type='file'
					name=''
				/>
				<span className='uploadBtn text-info text-end d-inline-block'>
					<FontAwesomeIcon icon={faCloudArrowUp} />
					<span className='ms-2'>{Btntype}</span>
				</span>
			</div>
		</div>
	);
}
