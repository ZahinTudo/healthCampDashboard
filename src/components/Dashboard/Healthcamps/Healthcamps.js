import React from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./healthcamps.css";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import HealthcampCards from "../HealthcampCards/HealthcampCards";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";

export default function Healthcamps(props) {
	const { width } = useWindowResize();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='w-100 p-4 pb-0'>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<div className='d-flex align-items-center '>
				{props.children}
				<h3 className='screenTitle mb-0'>Healthcamps</h3>
			</div>

			<div className='healthcamps p-4' style={{ height: "86vh" }}>
				<div className='healthcampsWrapperHead w-100'>
					<div className='search_wrapper '>
						<InputGroup className='pe-3 w-50'>
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
					<div className='my-4 d-flex align-items-center'>
						<span className='selectShadow me-3'>
							<DropdownButton
								variant=''
								title='All month'
								id='input-group-dropdown-1'>
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
						<span className='selectShadow me-3'>
							<DropdownButton
								variant=''
								title='Location'
								id='input-group-dropdown-1'>
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

						<span className='me-3'>
							<input
								id='Ongoing'
								className='me-2'
								type='checkbox'
								name='eventType'
							/>
							<label htmlFor='Ongoing'>Ongoing</label>
						</span>
						<span>
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
					column='3'
				/>
			</div>
		</div>
	);
}
