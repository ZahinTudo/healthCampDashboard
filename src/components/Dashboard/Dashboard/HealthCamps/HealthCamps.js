import {
	faEdit,
	faLocation,
	faLocationDot,
	faPencil,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FormControl, InputGroup, Spinner } from "react-bootstrap";
import useWindowResize from "../../../../CustomHooks/useWindowResize";
import useWrapperHeight from "../../../../CustomHooks/useWrapperHeight";
import HealthcampCards from "../../HealthcampCards/HealthcampCards";
import "./HealthCamps.css";
import { useSelector } from "react-redux";

export default function HealthCamps() {
	const [loading, setLoading] = useState(true);
	const [column, setColumn] = useState("4");
	const { width } = useWindowResize();
	const { location } = useSelector((state) => state.location);

	useEffect(() => {
		console.log(location);
		setTimeout(() => {
			setLoading(false);
			// patientLIstHeight();
		}, 100);
		if (width <= 600) setColumn("6");
	}, [width]);
	return (
		<div className='w-100 healthcampWrapper p-sm-4'>
			<div className='camWrapperHead d-flex flex-sm-row flex-column justify-content-between align-items-sm-center'>
				<h3>Healthcamps</h3>
				<div className='col-md-5 col-12 mt-3 mt-sm-0'>
					<InputGroup>
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
			</div>
			{loading ? (
				<Spinner />
			) : (
				<HealthcampCards
					parent={"healthcampWrapper"}
					head={"camWrapperHead"}
					target={".dashboardScreen .cardWrapper"}
					column={column}
				/>
			)}
		</div>
	);
}
