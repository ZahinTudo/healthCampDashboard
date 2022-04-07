import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import useWrapperHeight from "../../../../CustomHooks/useWrapperHeight";
import "./HealthRecords.css";
import Reports from "./Reports/Reports";

export default function HealthRecords(props) {
	useWrapperHeight("RecordDetails", "PatientCardbrief", "healthrecords");
	return (
		<div className='healthrecords w-100'>
			<Reports pdf={props.pdf} />
		</div>
	);
}
