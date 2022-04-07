import React from "react";
import VerticallyCenteredModal from "../../../Modal/VerticallyCenteredModal";

export default function AddRecords() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => {
					setModalShow(false);
				}}
				onConfirm={() => {
					setModalType("adduser");
					setModalShow(true);
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
					src='/assets/images/addRecord.svg'
					alt=''
					className='img-fluid'
				/>
			</span>
		</>
	);
}
