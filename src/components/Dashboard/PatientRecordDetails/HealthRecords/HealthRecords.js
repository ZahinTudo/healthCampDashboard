import React, { useEffect } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import useWrapperHeight from "../../../../CustomHooks/useWrapperHeight";
import "./HealthRecords.css";
import Reports from "./Reports/Reports";

export default function HealthRecords(props) {
	// useWrapperHeight(
	// 	"PatientRecordDetailsParts",
	// 	"PatientCard",
	// 	"healthrecords"
	// );
	useEffect(() => {
		// const head = document.getElementsByClassName("PatientCard")[0];
		// const target = document.getElementsByClassName("healthrecords")[0];
		// const minus = head.offsetHeight;
		// target.style.height = `calc(86vh - ${minus}px)`;
		// console.log(head.offsetHeight);
	}, []);
	return (
		<div
			className='healthrecords w-100 '
			style={{ height: "calc(86vh - 41vh)" }}>
			<Reports pdf={props.pdf} />
		</div>
	);
}
