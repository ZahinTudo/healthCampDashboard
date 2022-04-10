import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
	Dropdown,
	DropdownButton,
	FormControl,
	InputGroup,
} from "react-bootstrap";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import VerticallyCenteredModal from "../../Modal/VerticallyCenteredModal";
import "./PatientEnrolled.css";
import useWrapperHeight from "../../../../CustomHooks/useWrapperHeight";
import useWindowResize from "../../../../CustomHooks/useWindowResize";
import PatientList from "./PatientList/PatientList";
import DropDown from "../../../ModularComponents/DropDown/DropDown";
import Search from "../../../ModularComponents/Search/Search";

export default function PatientEnrolled() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	const { width } = useWindowResize();
	useWrapperHeight(
		"inrolementDetails",
		"patientEnrolledHeader",
		"patientEnrolledList",
		"50vh"
	);
	const gender = [
		{ name: "Male" },
		{ name: "Female" },
		{ name: "Others" },
		// { name: "Moderator" },
		// { name: "admin" },
		// { name: "Moderator" },
		// { name: "admin" },
		// { name: "Moderator" },
		// { name: "admin" },
	];
	useEffect(() => {
		// listSize();
	}, [width]);
	return (
		<div className='w-100 patientEnrolled'>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					// profileShow(1);
				}}
			/>
			<div className='pb-3 patientEnrolledHeader'>
				<div>
					<h3 className='title'>Patients Enrolled</h3>
				</div>
				<div>
					<div className='search_wrapper'>
						<Search width={100} className='me-sm-3' />
						{/* <InputGroup className='pe-3'>
							<InputGroup.Text id='searchBtn'>
								<FontAwesomeIcon icon={faSearch} />
							</InputGroup.Text>
							<FormControl
								style={{ padding: ".66rem" }}
								placeholder='Search'
								aria-label='Search'
								aria-describedby='basic-addon1'
							/>
						</InputGroup> */}
						<div
							className='btn addPatient mt-3 mt-sm-0'
							onClick={() => {
								setModalType("adduser");
								setModalShow(true);
							}}>
							<span className='' style={{ whiteSpace: "nowrap" }}>
								{" "}
								<FontAwesomeIcon icon={faUserPlus} />
								<span className='ms-2'>New User</span>
							</span>
						</div>
					</div>
					<div className='d-flex my-2 align-items-center '>
						<span className='me-2'>
							<DropDown
								height={12.204}
								width={21.014}
								name={"gender"}
								data={gender}
								type={"normal"}
							/>
							{/* <DropdownButton
								className='selectDropDown'
								variant=''
								title='Gender'
								id=''>
								<Dropdown.Item href='#'>Male</Dropdown.Item>
								<Dropdown.Item href='#'>Female</Dropdown.Item>
								<Dropdown.Item href='#'>Others</Dropdown.Item>
							</DropdownButton> */}
						</span>
						<span>
							<DropDown
								height={7}
								width={20}
								name={"Age"}
								data={gender}
								type={"age"}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className='patientEnrolledList '>
				<PatientList />
			</div>
		</div>
	);
}
