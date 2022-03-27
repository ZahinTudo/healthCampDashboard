import React, { useEffect } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

import {
	faArrowDownShortWide,
	faChevronDown,
	faSearch,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Records.css";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";

export default function Records() {
	const { width } = useWindowResize();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const patientLIstHeight = () => {
		const recordsWrapper = document.querySelector(".records");
		const searchFilter = document.querySelector(".SearchFilterSection");
		const patientList = document.querySelector(".patientList");
		patientList.style.height =
			getInnerHeight(recordsWrapper) -
			getInnerHeight(searchFilter) +
			"px";
	};
	useEffect(() => {
		patientLIstHeight();
		$(".grayDefault").change(function () {
			if ($(this).val() == "0") $(this).addClass("empty");
			else $(this).removeClass("empty");
		});
		$(".grayDefault").change();
	}, [width, modalShow]);
	return (
		<div className='w-100 recordList'>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<div className='SearchFilterSection'>
				<h3>Patients</h3>
				<div className='search_wrapper'>
					<InputGroup className='pe-3'>
						<InputGroup.Text id='searchBtn'>
							<FontAwesomeIcon icon={faSearch} />
						</InputGroup.Text>
						<FormControl
							placeholder='Search'
							aria-label='Search'
							aria-describedby='basic-addon1'
						/>
					</InputGroup>
					<div
						className='btn addPatient'
						onClick={() => {
							setModalType("form");
							setModalShow(true);
						}}>
						<span className='' style={{ whiteSpace: "nowrap" }}>
							{" "}
							<FontAwesomeIcon icon={faUserPlus} />
							<span className='ms-2'>New Patient</span>
						</span>
					</div>
				</div>
				<div className='filterSort d-flex justify-content-between align-items-center my-3'>
					<div className='d-flex'>
						<span className='me-3 btn d-flex align-items-center'>
							<span className='me-2'>Filter</span>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
						<span className='btn d-flex align-items-center'>
							<span className='me-2'>Sort</span>
							<FontAwesomeIcon icon={faArrowDownShortWide} />
						</span>
					</div>
					<div>
						<b>Showing 2/2 patients</b>
					</div>
				</div>
			</div>
			<div
				className='patientList'
				style={{ height: "53%", overflowY: "scroll" }}>
				{[1, 2, 3, 4, 5, 6, 8, 0, 0, 0, 0, 0, 0].map((item, ind) => (
					<div className=' d-flex justify-content-between align-items-center'>
						<div className='name'>Alina Bondareva</div>
						<div className='icons'>
							<span className='me-2'>
								<img
									className='img-fluid'
									style={{ width: "1rem", height: "1rem" }}
									src='/assets/images/pdf.png'
									alt=''
									srcset=''
								/>
							</span>
							<span
								onClick={() => {
									setModalType("otp");
									setModalShow(true);
								}}>
								<img
									style={{ width: "1rem", height: "1rem" }}
									className='img-fluid'
									src='/assets/images/user.png'
									alt=''
									srcset=''
								/>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
