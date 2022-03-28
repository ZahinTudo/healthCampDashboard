import {
	faEdit,
	faLocation,
	faLocationDot,
	faPencil,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import "./HealthCamps.css";

export default function HealthCamps() {
	const { width } = useWindowResize();
	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const patientLIstHeight = () => {
		const camWrapperHead = document.querySelector(".camWrapperHead");
		const healthcampWrapper = document.querySelector(".healthcampWrapper");
		const cardWrapper = document.querySelector(".cardWrapper");
		cardWrapper.style.height =
			getInnerHeight(healthcampWrapper) -
			getInnerHeight(camWrapperHead) +
			"px";
	};
	useEffect(() => {
		patientLIstHeight();
	}, [width]);
	return (
		<div className='w-100 healthcampWrapper p-4'>
			<div className='camWrapperHead d-flex justify-content-between align-items-center'>
				<h3>Healthcamps</h3>
				<InputGroup className='' style={{ width: "40%" }}>
					<InputGroup.Text id='searchBtn'>
						<FontAwesomeIcon icon={faSearch} />
					</InputGroup.Text>
					<FormControl
						placeholder='Search'
						aria-label='Search'
						aria-describedby='basic-addon1'
					/>
				</InputGroup>
			</div>
			<div className='row g-4 mt-2 cardWrapper py-3'>
				{[1, 1, 1, 1].map((item, ind) => (
					<div className=' col-4'>
						<div className='campCard '>
							<div className='cardHead position-relative'>
								<div>
									<img
										style={{
											borderRadius: "10px 10px 0 0",
										}}
										src='/assets/images/dummyImg.png'
										className='img-fluid'
										alt=''
										srcset=''
									/>
								</div>
								<div className='position-absolute bg-white date'>
									<span className='m-0'>MAR</span>
									<span className='m-0 '>24</span>
								</div>
								<div
									className='position-absolute text-white '
									style={{ top: "1.2rem", right: "1rem" }}>
									<FontAwesomeIcon icon={faPencil} />
								</div>
								<div
									className='position-absolute text-white p-1 px-2 d-flex align-items-center justify-content-center tag'
									style={{
										bottom: ".5rem",
										left: ".5rem",
										background: "#07B337",
										borderRadius: "1.5rem",
									}}>
									Ongoing
								</div>
							</div>
							<div className='py-2 px-3'>
								<div className='campName'>Healthcamp 1</div>
								<div className='location'>
									<span>
										<FontAwesomeIcon icon={faLocationDot} />
									</span>{" "}
									Location
								</div>
								<div className='time'>9:00-10:00 AM</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
