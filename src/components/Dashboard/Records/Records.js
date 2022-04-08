import React, { useEffect } from "react";
import {
	Dropdown,
	DropdownButton,
	FormControl,
	InputGroup,
	Table,
} from "react-bootstrap";
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
import UserSHow from "./UserShow/UserSHow";

export default function Records({ profileShow }) {
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
		if (width <= 600) {
			patientList.style.height = "350px";
			return;
		}
		patientList.style.height =
			getInnerHeight(recordsWrapper) -
			getInnerHeight(searchFilter) +
			"px";
		// console.log(
		// 	recordsWrapper,
		// 	searchFilter,
		// 	patientList,
		// 	getInnerHeight(recordsWrapper),
		// 	getInnerHeight(searchFilter)
		// );
	};
	useEffect(() => {
		patientLIstHeight();
		// $(".grayDefault").change(function () {
		// 	if ($(this).val() == "0") $(this).addClass("empty");
		// 	else $(this).removeClass("empty");
		// });
		// $(".grayDefault").change();
	}, [width, modalShow]);
	return (
		<div className='w-100 recordList'>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => {
					setModalShow(false);
				}}
			/>
			<div className='SearchFilterSection'>
				<h3>Manage Users</h3>
				<div className='search_wrapper'>
					<InputGroup className='pe-sm-3'>
						<InputGroup.Text id='searchBtn'>
							<FontAwesomeIcon icon={faSearch} />
						</InputGroup.Text>
						<FormControl
							style={{ padding: ".66rem" }}
							placeholder='Search'
							aria-label='Search'
							aria-describedby='basic-addon1'
						/>
					</InputGroup>
					<div
						className='btn addPatient d-none d-sm-flex'
						onClick={() => {
							setModalType("adduser");
							setModalShow(true);
						}}>
						<span
							className=''
							d-flex
							align-items-center
							style={{ whiteSpace: "nowrap" }}>
							{" "}
							<FontAwesomeIcon icon={faUserPlus} />
							<span className='ms-2'>New User</span>
						</span>
					</div>
				</div>
				<div className='filterSort d-flex justify-content-between align-items-center my-3'>
					<div className='d-flex align-items-center'>
						<span className=' me-3'>
							<DropdownButton variant='' title='Role' id=''>
								<Dropdown.Item href='#'>Action</Dropdown.Item>
								<Dropdown.Item href='#'>
									Another action
								</Dropdown.Item>
								<Dropdown.Item href='#'>
									Something else here
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href='#'>
									Separated link
								</Dropdown.Item>
							</DropdownButton>
						</span>
						<span>
							<input
								id='Inactive users'
								className='me-2'
								type='checkbox'
								name='eventType'
							/>
							<label htmlFor='upcoming'>Inactive users</label>
						</span>
					</div>
				</div>
				<div className='d-none d-sm-flex justify-content-between align-items-center my-2'>
					<div className='name col-3 '>Name</div>
					<div className='name col-3 text-center'>Phone</div>
					<div className='name col-2 text-center'>Role</div>
					<div className='name col-3 text-center'>Last Activity</div>
					<div className='name col-1 text-center'></div>
				</div>
			</div>
			<div
				className='patientList px-2 px-sm-0'
				style={{ height: "53%", overflowY: "scroll" }}>
				<UserSHow profileShow={profileShow} />
			</div>
		</div>
	);
}
