import React, { useEffect, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DetailCamp from "./DetailCamp/DetailCamp";
import PatientRecordDetails from "./PatientRecordDetails/PatientRecordDetails";
export default function Dashboard() {
	// let { topicId } = useParams();
	let { path, url } = useRouteMatch();
	const { logo } = useSelector((state) => state.logo);
	const dispatch = useDispatch();
	const dashItemClick = (e) => {
		const items = document.querySelectorAll(".dashMenuitem");
		items.forEach((el) =>
			el.addEventListener("click", (e) => {
				const sidebar = document.getElementsByClassName("sideBar")[0];
				const active = document.querySelector(".dashboardIcon.active");
				active?.classList.remove("active");
				const target = el.firstChild;
				target.classList.add("active");
				const indicatorTop = target.offsetTop - target.offsetHeight;
				document.querySelector(
					".indicator"
				).style.top = `${indicatorTop}px`;
				sidebar.classList.remove("open");
			})
		);
	};
	const sidebarOpen = () => {
		const sidebar = document.getElementsByClassName("sideBar")[0];
		sidebar.classList.add("open");
	};
	useEffect(() => {
		dispatch(getLogo());
		dashItemClick();
		const target = document.querySelector(".dashboardIcon.active");
		const indicatorTop = target.offsetTop - target.offsetHeight;
		document.querySelector(".indicator").style.top = `${indicatorTop}px`;
	}, [logo]);
	const Hamburger = () => (
		<span className='d-sm-none me-3' onClick={sidebarOpen}>
			{/* <FontAwesomeIcon className='text-info me-2' icon={faBars} /> */}
			<img src='/assets/images/burger.svg' alt='' className='img-fluid' />
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
					<div className='indicator position-absolute'>
						<img
							className='img-fluid'
							src='/assets/images/indicator.svg'
							alt=''
							srcset=''
						/>
					</div>
					<Link to={`${url}`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='dash_icon dashboardIcon active'></span>
							<span className='Dashitem'>Dashboard</span>
						</div>
					</Link>
					<Link to={`${url}/healthcamp`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='healthcare_icon dashboardIcon '></span>
							<span className='Dashitem'>Healthcamp</span>
						</div>
					</Link>
					<Link to={`${url}/users`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='user_icon dashboardIcon'></span>
							<span className='Dashitem'>Users</span>
						</div>
					</Link>
					<Link to={`${url}/settings`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='settings_icon dashboardIcon'></span>
							<span className='Dashitem'>Settings</span>
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
