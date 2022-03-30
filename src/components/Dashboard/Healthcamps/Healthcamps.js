import React from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faFileArchive,
	faLocationDot,
	faPencil,
	faSearch,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import HealthcampCards from "../HealthcampCards/HealthcampCards";

export default function Healthcamps() {
	const { width } = useWindowResize();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='w-100 p-4 pb-0'>
			<h3>Healthcamps</h3>

			<div
				className='healthcamps mt-4 bg-white p-4 rounded'
				style={{ height: "calc(100vh - 13vh)" }}>
				<div className='healthcampsWrapperHead'>
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
								setModalType("form");
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
						<span className='shadow me-3'>
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
						<span className='shadow me-3'>
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
					column='3'
				/>
				{/* <div className='row g-4 mt-2 cardWrapper py-3'>
					{[1, 1, 1, 1,1,1,1].map((item, ind) => (
						<div className=' col-3'>
							<div className='campCard '>
								<div className='cardHead position-relative'>
									<div>
										<img
											style={{
												borderRadius: "10px 10px 0 0",
											}}
											src='/assets/images/dummyImg.png'
											className='img-fluid'
											alt=''
											srcset=''
										/>
									</div>
									<div className='position-absolute bg-white date'>
										<span className='m-0'>MAR</span>
										<span className='m-0 '>24</span>
									</div>
									<div
										className='position-absolute text-white '
										style={{
											top: "1.2rem",
											right: "1rem",
										}}>
										<FontAwesomeIcon icon={faPencil} />
									</div>
									<div
										className='position-absolute text-white p-1 px-2 d-flex align-items-center justify-content-center tag'
										style={{
											bottom: ".5rem",
											left: ".5rem",
											background: "#07B337",
											borderRadius: "1.5rem",
										}}>
										Ongoing
									</div>
								</div>
								<div className='py-2 px-3'>
									<div className='campName'>Healthcamp 1</div>
									<div className='location'>
										<span>
											<FontAwesomeIcon
												icon={faLocationDot}
											/>
										</span>{" "}
										Location
									</div>
									<div className='time'>9:00-10:00 AM</div>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</div>
	);
}
