import React, { useEffect } from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./healthcamps.css";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import HealthcampCards from "../HealthcampCards/HealthcampCards";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";
import DropDown from "../../ModularComponents/DropDown/DropDown";
import Search from "../../ModularComponents/Search/Search";

export default function Healthcamps(props) {
	const { width } = useWindowResize();
	const [column, setColumn] = React.useState("3");

	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	const months = [
		{ name: "January" },
		{ name: "February" },
		{ name: "March" },
		{ name: "April" },
		{ name: "May" },
		{ name: "june" },
		{ name: "july" },
		{ name: "august" },
		{ name: "september" },
		{ name: "october" },
		{ name: "november" },
		{ name: "december" },
	];
	const state = [
		{ name: "Bengaluru" },
		{ name: "Mumbai" },
		{ name: "Rajasthan" },
		{ name: "Madhya pradesh" },
		{ name: "Uttar pradesh" },
	];
	useEffect(() => {
		if (width <= 800) setColumn("12");
	}, [width]);

	return (
		<div className='w-100 p-3 pb-0'>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<div className='d-flex align-items-center '>
				{props.children}
				<h3 className='screenTitle mb-0'>Healthcamps</h3>
			</div>

			<div className='healthcamps p-sm-4'>
				<div className='healthcampsWrapperHead w-100'>
					<div className='search_wrapper '>
						<div className='pe-sm-3 w-100'>
							<Search width={50} />
						</div>

						{/* <InputGroup className='pe-sm-3 '>
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
							className='btn addPatient'
							onClick={() => {
								setModalType("addcamp");
								setModalShow(true);
							}}>
							<span className='' style={{ whiteSpace: "nowrap" }}>
								{" "}
								<FontAwesomeIcon icon={faCalendar} />
								<span className='ms-2'>New Event</span>
							</span>
						</div>
					</div>
					<div className='my-1 my-sm-4 flex-wrap d-flex  align-items-center'>
						<div className=' me-3 my-2 my-sm-0'>
							<DropDown
								type={"normal"}
								height={16}
								width={21}
								name={"all months"}
								data={months}
							/>
						</div>

						<span className=' me-3 my-2 my-sm-0'>
							<DropDown
								type={"location"}
								height={25.223}
								width={33.509}
								name={"Location"}
								data={state}
							/>
						</span>

						<span className='me-3 checkbox my-2 my-sm-0'>
							<input
								id='Ongoing'
								className='me-2 '
								type='checkbox'
								name='eventType'
							/>
							<label htmlFor='Ongoing'>Ongoing</label>
						</span>
						<span className='checkbox my-2 my-sm-0'>
							<input
								id='upcoming'
								className='me-2'
								type='checkbox'
								name='eventType'
							/>
							<label htmlFor='upcoming'>Upcoming</label>
						</span>
					</div>
				</div>
				<HealthcampCards
					parent={"healthcamps"}
					head={"healthcampsWrapperHead"}
					target={".healthcamps .cardWrapper"}
					column={column}
				/>
			</div>
		</div>
	);
}
