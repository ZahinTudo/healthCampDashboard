import React from "react";
import "./MobilePatientDetails.css";

export default function MobilePatientDetails() {
	return (
		<div className='mobilePatientDetails'>
			<div className='personDetailCard'>
				<div className=' col-3'>
					<span className='img-wrapper'>
						<img
							src='/assets/images/dummyPerson.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</div>
				<div className='col-9 ps-3 personalDetails'>
					<div
						className='d-flex justify-content-between'
						style={{ marginBottom: "5px" }}>
						<h4 className='name m-0'>Bella DCosta</h4>
						<div className='dot'>
							<img
								src='/assets/images/dot.svg'
								alt=''
								className='img-fluid'
							/>
						</div>
					</div>
					<div
						className=' ageSex d-flex align-items-center'
						style={{ marginBottom: "6px" }}>
						<span>27 yo</span>
						<span className='mx-2'>|</span>
						<span className='sex d-flex align-items-center'>
							<span className='me-2 '>Female</span>
							<span>
								<img
									style={{ width: "16px" }}
									src='/assets/images/sex.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
						</span>
					</div>
					<div
						className='personalInfo d-flex align-items-center '
						style={{ marginBottom: "9px" }}>
						<span className='icon'>
							<img
								style={{ width: "9.3px" }}
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
								style={{ width: "16px" }}
								src='/assets/images/nid.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='ms-2 text'>1291027898ABQIO</span>
					</div>
				</div>
			</div>
			<div className='contactsCard' style={{ marginTop: "16px" }}>
				<h4 className='title' style={{ marginBottom: "16.5px" }}>
					Contact Details
				</h4>
				<div className='d-flex justify-content-between w-100'>
					<div className='col phone d-flex align-items-center'>
						<span className='d-flex align-items-center me-2'>
							<img
								style={{ width: "8px" }}
								src='/assets/images/phone.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text'>+91-9290302020</span>
					</div>
					<div className='col email d-flex align-items-center'>
						<span className='d-flex align-items-center me-2'>
							<img
								style={{ width: "13px" }}
								src='/assets/images/mail.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text'>bellacosta@mail.com</span>
					</div>
				</div>
			</div>
		</div>
	);
}
