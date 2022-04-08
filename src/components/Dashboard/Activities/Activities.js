import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";
import "./Activities.css";

export default function Activities({ add }) {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='activities_wrapper mt-3 mt-sm-0'>
			<div
				className='col-12 bg-white activities'
				style={{ height: "calc(100% - 0rem)" }}>
				<VerticallyCenteredModal
					type={modalType}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<div className='w-100 p-2'>
					<div className='d-flex align-items-center justify-content-between'>
						<h4 className='m-0 title'>Activity</h4>
						{add ? (
							<div
								className='btn addPatient'
								onClick={() => {
									setModalType("addpatient");
									setModalShow(true);
								}}>
								<span
									className=''
									style={{ whiteSpace: "nowrap" }}>
									<FontAwesomeIcon icon={faUserPlus} />
									<span className='ms-2'>New Patient</span>
								</span>
							</div>
						) : (
							""
						)}
					</div>
					<div className='mt-4'>
						{[1, 2, 3, 4].map((items, ind) => (
							<p className='status'>
								<Link>
									{" "}
									<u>Chetana Singh</u>
								</Link>{" "}
								has attended in{" "}
								<Link>
									<u>healthcamp</u>
								</Link>
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
