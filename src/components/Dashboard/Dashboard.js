import React, { useEffect, useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogo } from "../../Redux/LocalStorage";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import DashboardScreen from "./Dashboard/DashboardScreen";
import Healthcamps from "./Healthcamps/Healthcamps";
import Users from "./Users/Users";
import Settings from "./Settings/Settings";

import DetailCamp from "./DetailCamp/DetailCamp";
import PatientRecordDetails from "./PatientRecordDetails/PatientRecordDetails";
import { getColor } from "../../Redux/ColorScheme";
export default function Dashboard() {
	//redux color setting state
	const { color } = useSelector((state) => state.color);
	//redux logo state
	const { logo } = useSelector((state) => state.logo);
	//redux function
	const dispatch = useDispatch();

	//nested routing path
	let { path, url } = useRouteMatch();

	//icon change state
	const [dashIndi, setDashIndi] = useState({
		dash: true,
		camp: false,
		user: false,
		setting: false,
	});

	//for icon change on click
	const dashClick = (e) => {
		const name = e.currentTarget.name;
		console.log(name);
		const keys = Object.keys(dashIndi);
		const newData = { ...dashIndi };
		keys.forEach((item, ind) => {
			console.log(item);
			if (item != name) newData[item] = false;
			else newData[item] = true;
		});
		console.log(newData);
		setDashIndi(newData);
	};

	//indicatore movement
	const dashItemClick = (e) => {
		const items = document.querySelectorAll(".dashMenuitem");
		items.forEach((el) =>
			el.addEventListener("click", (e) => {
				const sidebar = document.getElementsByClassName("sideBar")[0];
				const active = document.querySelector(".dashboardIcon.active");
				const colorTarget = document.querySelector(
					".dashboardIcon.active + .Dashitem"
				);
				active?.classList.remove("active");
				const target = el.firstChild;
				target.classList.add("active");
				const indicatorTop = target.offsetTop - target.offsetHeight;
				document.querySelector(
					".indicator"
				).style.top = `${indicatorTop}px`;
				sidebar.classList.remove("open");
				// console.log(colorTarget.style.background);
				// colorTarget. =
				// 	"linear-gradient(90deg, #2EA8FA 0%, #076EB3 100%)";
			})
		);
	};

	//mobile side bar open
	const sidebarOpen = () => {
		const sidebar = document.getElementsByClassName("sideBar")[0];
		sidebar.classList.add("open");
	};
	useEffect(() => {
		dispatch(getColor());
		// style color property change
		var bodyStyles = document.body.style;
		bodyStyles.setProperty("--color", color);

		dispatch(getLogo());
		dashItemClick();
		const target = document.querySelector(".dashboardIcon.active");
		const indicatorTop = target.offsetTop - target.offsetHeight;
		document.querySelector(".indicator").style.top = `${indicatorTop}px`;
	}, [logo, color]);

	// hamburger component
	const Hamburger = () => (
		<span className='d-sm-none me-3' onClick={sidebarOpen}>
			<svg
				width='25'
				height='20'
				viewBox='0 0 25 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M2.5 4H22.5C23.0304 4 23.5391 3.78929 23.9142 3.41421C24.2893 3.03914 24.5 2.53043 24.5 2C24.5 1.46957 24.2893 0.960859 23.9142 0.585786C23.5391 0.210714 23.0304 0 22.5 0H2.5C1.96957 0 1.46086 0.210714 1.08579 0.585786C0.710714 0.960859 0.5 1.46957 0.5 2C0.5 2.53043 0.710714 3.03914 1.08579 3.41421C1.46086 3.78929 1.96957 4 2.5 4ZM22.5 8H2.5C1.96957 8 1.46086 8.21071 1.08579 8.58579C0.710714 8.96086 0.5 9.46957 0.5 10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H22.5C23.0304 12 23.5391 11.7893 23.9142 11.4142C24.2893 11.0391 24.5 10.5304 24.5 10C24.5 9.46957 24.2893 8.96086 23.9142 8.58579C23.5391 8.21071 23.0304 8 22.5 8ZM22.5 16H2.5C1.96957 16 1.46086 16.2107 1.08579 16.5858C0.710714 16.9609 0.5 17.4696 0.5 18C0.5 18.5304 0.710714 19.0391 1.08579 19.4142C1.46086 19.7893 1.96957 20 2.5 20H22.5C23.0304 20 23.5391 19.7893 23.9142 19.4142C24.2893 19.0391 24.5 18.5304 24.5 18C24.5 17.4696 24.2893 16.9609 23.9142 16.5858C23.5391 16.2107 23.0304 16 22.5 16Z'
					fill={color}
				/>
			</svg>
		</span>
	);
	return (
		<div className='dashboard  position-relative d-flex'>
			<div className='sideBar   p-4 col-2'>
				<div
					className='d-flex justify-content-center'
					style={{ minHeight: "70px" }}>
					{logo ? (
						<div className='d-flex justify-content-center'>
							<div style={{ width: "25%" }}>
								<img
									src={logo}
									className='img-fluid'
									alt=''
									srcset=''
								/>
							</div>
						</div>
					) : (
						<div className='bg-secondary p-3 d-flex align-items-center justify-content-center '>
							<h3 className='text-center m-0 '>LOGO</h3>
						</div>
					)}
				</div>

				<div
					className='d-flex flex-column justify-content-evenly align-items-start '
					style={{ height: "18rem" }}>
					{/* indicator html  */}
					<div className='indicator position-absolute'>
						<svg
							width='16'
							height='49'
							viewBox='0 0 16 49'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0 0.788818C8.36793e-07 17.4225 34.9734 28.5116 0 48.5573V0.788818Z'
								fill={color}
							/>
						</svg>
					</div>
					{/* menu of the dash board */}
					<Link onClick={dashClick} name='dash' to={`${url}`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='dash_icon dashboardIcon active'>
								{dashIndi.dash ? (
									<span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											enable-background='new 0 0 24 24'
											viewBox='0 0 24 24'>
											<path
												fill={color}
												d='M10,13H4c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C11,13.4,10.6,13,10,13z M10,3H4C3.4,3,3,3.4,3,4v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1V4C11,3.4,10.6,3,10,3z M20,16h-2v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2h2c0.6,0,1-0.4,1-1S20.6,16,20,16z M20,3h-6c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z'
											/>
										</svg>
									</span>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										data-name='Layer 1'
										viewBox='0 0 24 24'>
										<path
											fill='#000'
											d='M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z'
										/>
									</svg>
								)}
							</span>
							<span className='Dashitem'>Dashboard</span>
						</div>
					</Link>
					<Link
						name='camp'
						onClick={dashClick}
						to={`${url}/healthcamp`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='healthcare_icon dashboardIcon '>
								{dashIndi.camp ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										enable-background='new 0 0 24 24'
										viewBox='0 0 24 24'>
										<path
											fill={color}
											d='M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'>
										<path
											fill='#000'
											d='M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z'
										/>
									</svg>
								)}
							</span>

							<span className='Dashitem'>Healthcamp</span>
						</div>
					</Link>
					<Link name='user' onClick={dashClick} to={`${url}/users`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='user_icon dashboardIcon'>
								{dashIndi.user ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										enable-background='new 0 0 24 24'
										viewBox='0 0 24 24'>
										<path
											fill={color}
											d='M12,12c2.8,0,5-2.2,5-5s-2.2-5-5-5S7,4.2,7,7S9.2,12,12,12z M21.3,20.8c-1.3-5.1-6.5-8.3-11.6-7c-3.4,0.9-6.1,3.5-7,7c-0.1,0.5,0.2,1.1,0.8,1.2c0.1,0,0.2,0,0.2,0h16.6c0.6,0,1-0.4,1-1C21.3,20.9,21.3,20.8,21.3,20.8z'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'>
										<path
											fill='#000'
											d='M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z'
										/>
									</svg>
									// <img
									// 	src='/assets/images/user.svg'
									// 	alt=''
									// 	className='img-fluid'
									// />
								)}
							</span>
							<span className='Dashitem'>Users</span>
						</div>
					</Link>
					<Link
						name='setting'
						onClick={dashClick}
						to={`${url}/settings`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='settings_icon dashboardIcon'>
								{dashIndi.setting ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										enable-background='new 0 0 24 24'
										viewBox='0 0 24 24'>
										<path
											fill={color}
											d='M20.3,12.7c-0.3-0.4-0.3-0.9,0-1.3l1.3-1.4c0.3-0.3,0.3-0.8,0.1-1.2l-2-3.5c-0.2-0.4-0.6-0.6-1.1-0.5l-1.9,0.4c-0.5,0.1-1-0.2-1.1-0.7l-0.6-1.8C14.8,2.3,14.4,2,14,2h-4C9.6,2,9.2,2.3,9.1,2.7L8.4,4.5C8.3,5,7.8,5.3,7.3,5.2L5.4,4.8C5,4.7,4.6,4.9,4.3,5.3l-2,3.5C2.1,9.1,2.2,9.6,2.5,9.9l1.3,1.4c0.3,0.4,0.3,0.9,0,1.3l-1.3,1.4c-0.3,0.3-0.3,0.8-0.1,1.2l2,3.5c0.2,0.4,0.6,0.6,1.1,0.5l1.9-0.4c0.5-0.1,1,0.2,1.1,0.7l0.6,1.8C9.2,21.7,9.6,22,10,22h4c0.4,0,0.8-0.3,0.9-0.7l0.6-1.8c0.2-0.5,0.7-0.8,1.1-0.7l1.9,0.4c0.4,0.1,0.9-0.1,1.1-0.5l2-3.5c0.2-0.4,0.2-0.8-0.1-1.2L20.3,12.7z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,15,12,15z'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										data-name='Layer 1'
										viewBox='0 0 24 24'>
										<path
											fill='#000000'
											d='M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z'
										/>
									</svg>
								)}
							</span>

							<span className='Dashitem'>Settings</span>
						</div>
					</Link>
					<Link
						to='/'
						className='position-absolute'
						style={{ bottom: "35px" }}>
						<div className='d-flex align-items-center logout'>
							<span className='me-3'>
								<img
									src='/assets/images/logout.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							{/* <i class='uil uil-6-plus'></i> */}
							<span className='text'>Logout</span>
						</div>
					</Link>
				</div>
			</div>
			<div className='col-12 col-md-10'>
				<Switch>
					<Route exact path={path}>
						<DashboardScreen>
							<Hamburger />
						</DashboardScreen>
					</Route>
					<Route exact path={`${path}/PatientRecordDetails`}>
						<PatientRecordDetails>
							<Hamburger />
						</PatientRecordDetails>
					</Route>
					<Route exact path={`${path}/healthcamp`}>
						<Healthcamps>
							<Hamburger />
						</Healthcamps>
					</Route>
					<Route exact path={`${path}/users`}>
						<Users>
							<Hamburger />
						</Users>
					</Route>
					<Route exact path={`${path}/settings`}>
						<Settings>
							<Hamburger />
						</Settings>
					</Route>
					<Route exact path={`${path}/:topicId`}>
						<DetailCamp>
							<Hamburger />
						</DetailCamp>
					</Route>
					<Route exact path={`${path}/healthcamp/:topicId`}>
						<DetailCamp>
							<Hamburger />
						</DetailCamp>
					</Route>
				</Switch>
			</div>
		</div>
	);
}
