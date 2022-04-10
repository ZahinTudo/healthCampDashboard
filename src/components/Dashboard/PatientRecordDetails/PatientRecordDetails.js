import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HealthRecords from "./HealthRecords/HealthRecords";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientRecordDetails.css";
import { Document } from "react-pdf";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import MobilePatientDetails from "./MobilePatientDetails/MobilePatientDetails";
import { useHistory } from "react-router-dom";

export default function PatientRecordDetails(props) {
	const { width } = useWindowResize();
	const [pdf, setpdf] = React.useState("");
	const history = useHistory();
	const pdfUrlHandle = (url) => {
		// setpdf("http://africau.edu/images/default/sample.pdf");
		setpdf(url);
	};
	// if (width <= 600) {
	//     return (
	//         <MobilePatientDetails/>
	//     )
	// }
	return (
		<div className='p-3 PatientRecordDetails'>
			<div className='d-flex align-items-center '>
				{props.children}
				<span
					style={{ cursor: "pointer" }}
					onClick={() => history.goBack()}>
					<FontAwesomeIcon
						style={{ fontSize: "2.5rem" }}
						icon={faArrowLeft}
					/>{" "}
				</span>
				<h3 className='ms-2 mb-0 title'>Patient Details</h3>
			</div>
			<div className='PatientRecordDetailsParts'>
				<div className='RecordDetails'>
					<div className='PatientCardbrief w-100'>
						<PatientCard />
					</div>
					<div className='w-100'>
						<HealthRecords pdf={pdfUrlHandle} />
					</div>
				</div>
				<div className='d-none d-sm-block recordViewer w-100 d-flex flex-column'>
					<div className='d-flex justify-content-between w-100 mb-2'>
						<span className='title'>File Viewer</span>
						<span>
							<img
								style={{ width: "1rem" }}
								src='/assets/images/zoom.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
					</div>
					{pdf.length > 0 ? (
						<object
							data={pdf}
							type='application/pdf'
							width='100%'
							height='100%'>
							<div
								className='d-flex flex-column align-items-center justify-content-center w-100 h-100'
								style={{ flexGrow: "1" }}>
								<span>
									<img
										src='/assets/images/noPdf.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span className='px-5 py-2 text-center sorrytext'>
									Sorry nothing to show here currently. <br />{" "}
									Click on a record to view <br /> a file.
								</span>
							</div>
						</object>
					) : (
						<div
							className='d-flex flex-column align-items-center justify-content-center w-100 h-100'
							style={{ flexGrow: "1" }}>
							<span>
								<img
									src='/assets/images/noPdf.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='px-5 py-2 text-center sorrytext'>
								Sorry nothing to show here currently. <br />{" "}
								Click on a record to view <br /> a file.
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
