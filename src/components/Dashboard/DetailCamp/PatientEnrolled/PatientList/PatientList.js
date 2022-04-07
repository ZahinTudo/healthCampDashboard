import React from "react";
import AddRecords from "../AddRecords/AddRecords";
import PatientDetails from "../PatientDetails/PatientDetails";

export default function PatientList() {
	return (
		<>
			{[1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 77, 7, 4].map((item, ind) => (
				<div className='d-flex justify-content-between align-items-center'>
					<h3 className='name'>Alina Bondareva</h3>
					<div className='d-flex align-items-center'>
						<AddRecords/>
						<PatientDetails/>
					</div>
				</div>
			))}
		</>
	);
}
