import {
	faArrowDownShortWide,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UpcomingHealthcamp.css";
import React, { useEffect } from "react";
import useWindowResize from "../../../CustomHooks/useWindowResize";

export default function UpcomingHealthcamp() {
	const { width } = useWindowResize();
	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const patientLIstHeight = () => {
		const upcomingWrapper = document.querySelector(".canlender ");
		const upcomingHead = document.querySelector(".upcomingHead");
		const upcomingList = document.querySelector(".upcomingList");
		upcomingList.style.height =
			getInnerHeight(upcomingWrapper) -
			getInnerHeight(upcomingHead) +
			"px";
	};
	useEffect(() => {
		patientLIstHeight();
	}, [width]);
	return (
		<div className='UpcomingHC w-100'>
			<div className='upcomingHead px-2 d-flex justify-content-between align-items-center mb-3'>
				<span className='title fw-bold'>Upcoming Healthcamps</span>
				<span className='btn d-flex align-items-center'>
					<span className='me-2'>Sort</span>
					<FontAwesomeIcon icon={faArrowDownShortWide} />
				</span>
			</div>
			<div className='upcomingList p-2'>
				{[1, 1, 1, 1, 1, 1, 1, 1].map((item, ind) => (
					<div className='listItem d-flex justify-content-between align-items-center mb-3'>
						<div className='d-flex justify-content-between align-items-center'>
							<div className='date me-2'>
								<div>MAR</div>
								<div>24</div>
							</div>
							<div>
								<div className='campName fw-bold'>
									ABC Healthcamp
								</div>
								<small>Location</small>
							</div>
						</div>
						<div className='d-flex' align-items-center>
							<span className='time'>9:00 AM-10:00AM</span>
							<div className='dots ms-2'>
								<FontAwesomeIcon icon={faEllipsisV} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
