import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Campinfo.css";

export default function CampInfo() {
	return (
		<div className='w-100 campinfo'>
			<div className='d-flex  justify-content-between align-items-center'>
				<h3>Healthcamp 1</h3>
				<span>
					<img
						style={{ width: "2.7rem" }}
						src='/assets/images/editPencil.svg'
						alt=''
						className='img-fluid'
					/>
				</span>
			</div>
			<div className='campImg my-2'></div>
			<div className='d-flex justify-content-between align-items-center'>
				<div className='d-flex align-items-center'>
					<span>
						{/* <FontAwesomeIcon icon={faLocationDot} />{" "} */}
						<img
							style={{ width: "1.25rem" }}
							src='/assets/images/LocationGray.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span className='ms-2 location'>Location</span>
				</div>
				<dive className='time'>9:00-10:00 AM</dive>
			</div>
			<div className='my-3'>
				<span className='tag'>Ongoing</span>
			</div>
			<p className='textDetails'>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo.
			</p>
			<div className='campNumbers'>
				<div className='cards'>
					<h3 className='title'>25</h3>
					<p className='type'>No. of Healthcamp</p>
				</div>
				<div className='cards'>
					<h3 className='title'>25</h3>
					<p className='type'>No. of Patients enrolled</p>
				</div>
			</div>
		</div>
	);
}
