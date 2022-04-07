import React from "react";
import VerticallyCenteredModal from "../../Modal/VerticallyCenteredModal";
import "./PatientCard.css";
export default function PatientCard() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='d-flex w-100 PatientCard '>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<div className='col-4'>
				<span>
					<img
						src='/assets/images/dummyPerson.png'
						alt=''
						className='img-fluid'
					/>
				</span>
			</div>
			<div className='col-8 ps-3 d-flex flex-column'>
				<div className='d-flex align-items-center justify-content-between'>
					<div className='d-flex align-items-center justify-content-between'>
						<h3 className='name me-2 mb-0'>Bella DCosta</h3>
						<h4 className='age mb-0'>22</h4>
					</div>
					<span>
						<img
							onClick={() => {
								setModalType("edituser");
								setModalShow(true);
							}}
							src='/assets/images/editPencil.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
				</div>
				<div className=' contacts'>
					<div className='d-flex flex-column h-100 justify-content-between '>
						<div className='sex  d-flex align-items-center'>
							<span className='me-2 '>Female</span>
							<span>
								<img
									src='/assets/images/sex.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
						</div>
						<div className='personalInfo d-flex align-items-center '>
							<span className='icon'>
								<img
									src='/assets/images/location.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='ms-2 text'>Jaipur, Rajasthan</span>
						</div>
						<div className='personalInfo d-flex align-items-center '>
							<span className='icon'>
								<img
									src='/assets/images/phone.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='ms-2 text'>+91-9290302020</span>
						</div>
						<div className='personalInfo d-flex align-items-center '>
							<span className='icon'>
								<img
									src='/assets/images/mail.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='ms-2 text'>
								bellacosta@mail.com
							</span>
						</div>
						<div className='personalInfo d-flex align-items-center '>
							<span className='icon'>
								<img
									src='/assets/images/nid.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='ms-2 text'>1291027898ABQIO</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
