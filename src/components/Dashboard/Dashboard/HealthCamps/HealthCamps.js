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
	const { width } = useWindowResize();
	const { location } = useSelector((state) => state.location);

	useEffect(() => {
		console.log(location);
		setTimeout(() => {
			setLoading(false);
			// patientLIstHeight();
		}, 100);
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
			{loading ? (
				<Spinner />
			) : (
				<HealthcampCards
					parent={"healthcampWrapper"}
					head={"camWrapperHead"}
					column={"4"}
				/>
			)}
		</div>
	);
}
