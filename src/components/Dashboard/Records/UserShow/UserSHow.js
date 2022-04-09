import React from "react";
import VerticallyCenteredModal from "../../Modal/VerticallyCenteredModal";
import useWindowResize from "../../../../CustomHooks/useWindowResize";
import "./UserShow.css";

export default function UserSHow({ profileShow }) {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	const { width } = useWindowResize();

	const DeskList = () => (
		<>
			{[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((item, ind) => (
				<div className=' d-flex justify-content-between align-items-center mb-3'>
					<div className='name col-3 '>Alina Bondareva</div>
					<div className=' col-3 text-center'>+91-9236785412</div>
					<div className=' col-2 text-center'>Moderator</div>
					<div className=' col-3 text-center'>26 Mar 2022</div>
					<div className='icons col-1 text-center'>
						<span
							onClick={() => {
								setModalType("otp");
								setModalShow(true);
							}}>
							<img
								style={{ width: "1rem", height: "1rem" }}
								className='img-fluid'
								src='/assets/images/user.png'
								alt=''
								srcset=''
							/>
						</span>
					</div>
				</div>
			))}
		</>
	);
	const MoblieList = () => (
		<>
			{[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((item, ind) => (
				<div className='listofuser my-3 d-flex justify-content-between align-items-center'>
					<div className='col-2 d-flex align-items-center justify-content-center'>
						<div className='imgPlaceholder'></div>
					</div>
					<div className='col-10 px-3 d-flex'>
						<div className='d-flex flex-column'>
							<span className='username'>Alina Bondareva</span>
							<span className='userphone'>+91-9236785412</span>
							<span className='datetime'>
								Last Active: 31/03/2022
							</span>
						</div>
						<div>
							<div className='role'>A</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
	return (
		<>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onConfirm={() => {
					setModalShow(false);
					profileShow(1);
				}}
			/>
			{width <= 600 ? MoblieList() : DeskList()}
		</>
	);
}
