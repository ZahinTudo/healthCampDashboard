import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import CampInfo from "./CampInfo/CampInfo";
import PatientEnrolled from "./PatientEnrolled/PatientEnrolled";
import "./DetailCamp.css";

export default function DetailCamp(props) {
	const { topicId } = useParams();
	return (
		<div className='p-3 detailcamp'>
			<div className='d-flex align-items-center '>
				<FontAwesomeIcon
					style={{ fontSize: "2.5rem" }}
					icon={faArrowLeft}
				/>{" "}
				<h3 className='ms-2 mb-0 title'>Heathcamp details</h3>
			</div>
			<div className='detailsParts'>
				<div className='campDetails'>
					<CampInfo />
				</div>
				<div className='inrolementDetails'>
					<PatientEnrolled />
				</div>
			</div>
		</div>
	);
}
