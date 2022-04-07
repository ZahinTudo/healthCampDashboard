import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HealthRecords from "./HealthRecords/HealthRecords";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientRecordDetails.css";

export default function PatientRecordDetails() {
	return (
		<div className='p-3 PatientRecordDetails'>
			<div className='d-flex align-items-center '>
				<FontAwesomeIcon
					style={{ fontSize: "2.5rem" }}
					icon={faArrowLeft}
				/>{" "}
				<h3 className='ms-2 mb-0 title'>Patient Details</h3>
			</div>
			<div className='PatientRecordDetailsParts'>
				<div className='RecordDetails'>
					<div className='PatientCardbrief w-100'>
						<PatientCard />
					</div>
					<HealthRecords />
				</div>
				<div className='recordViewer'>{/* <PatientEnrolled /> */}</div>
			</div>
		</div>
	);
}
