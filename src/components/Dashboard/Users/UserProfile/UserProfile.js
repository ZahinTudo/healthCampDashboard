import {
	faLocation,
	faMobile,
	faPhone,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useWrapperHeight from "../../../../CustomHooks/useWrapperHeight";
import VerticallyCenteredModal from "../../Modal/VerticallyCenteredModal";
import "./UserProfile.css";
export default function UserProfile({ state }) {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	// useWrapperHeight("userProfile", "userDetails", "userHistory");
	return (
		<div className='UserProfile_wrapper '>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<div
				className='col-12 bg-white user'
				style={{ height: "calc(100% - 0rem)" }}>
				<div className='userProfile w-100 p-4'>
					<div className='d-flex justify-content-between align-items-center'>
						<h4 className='title text-capitalize'>Profile</h4>
						<span
							onClick={() => state(false)}
							style={{ cursor: "pointer" }}>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</div>
					<div className='userDetails'>
						<div className='my-2 d-flex align-items-center'>
							<span>
								<img
									src='/assets/images/useDummy.png'
									alt=''
									className='img-fluid'
								/>
							</span>
							<div className='ms-3'>
								<h4 className='username'>Chetan singh</h4>
								<h5 className='text-secondary'>Admin | 27</h5>
							</div>
						</div>
						<div className='userContacts my-3 d-flex w-100 justify-content-between'>
							<div
								className='col pb-4'
								style={{ borderBottom: "1px solid #076EB2" }}>
								<div className='d-flex'>
									{" "}
									<span>
										<FontAwesomeIcon icon={faLocation} />
									</span>
									<span className='ms-2'>
										Jaipur, Rajasthan
									</span>
								</div>
								<div className='d-flex mt-2'>
									{" "}
									<span>
										<FontAwesomeIcon
											className=''
											icon={faMobile}
										/>
									</span>
									<span className='ms-2'>+91-9290302020</span>
								</div>
							</div>
							<div className='col text-end'>
								<span
									className='d-inline-block'
									style={{ width: "2.5rem" }}>
									<img
										src='/assets/images/editPencil.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span
									className='d-inline-block mx-2'
									style={{ width: "2.5rem" }}>
									<img
										src='/assets/images/Phone.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<a
									href='mailto:someone@example.com'
									className='d-inline-block'
									style={{ width: "2.5rem" }}>
									<img
										src='/assets/images/Email.svg'
										alt=''
										className='img-fluid'
									/>
								</a>
							</div>
						</div>
						<div className='userHistory'>
							<h5 className='text-secondary'>History</h5>
							<div className='historyList'>
								{[1, 2].map((item, ind) => (
									<div className='d-flex w-100  my-2 justify-content-between'>
										<div className='historyType'>
											Added a prescription
										</div>
										<div
											className='Createddate'
											style={{ color: "#666666" }}>
											20:00 21 Mar 2022
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
