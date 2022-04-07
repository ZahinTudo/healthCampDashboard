import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import VerticallyCenteredModal from "../../../Modal/VerticallyCenteredModal";

export default function PatientDetails() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	const history = useHistory();
	const location = useLocation();
	return (
		<>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					// profileShow(1);
				}}
				onConfirm={() => {
					// console.log("okks");
					history.push("/dashboard/PatientRecordDetails");
					// location.pathname("/patientDetails")
				}}
			/>
			<span
				style={{ cursor: "pointer" }}
				onClick={() => {
					setModalType("otp");
					setModalShow(true);
				}}>
				<img
					style={{ width: "4.5rem" }}
					src='/assets/images/userBtn.svg'
					alt=''
					className='img-fluid'
				/>
			</span>
		</>
	);
}
