import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogo } from "../../Redux/LocalStorage";
import Records from "./Records/Records";
import UpcomingHealthcamp from "./UpcomingHealthcamp/UpcomingHealthcamp";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import DashboardScreen from "./Dashboard/DashboardScreen";
export default function Dashboard() {
	// let { topicId } = useParams();
	let { path, url } = useRouteMatch();
	const { logo } = useSelector((state) => state.logo);
	const dispatch = useDispatch();
	const dashItemClick = (e) => {
		const items = document.querySelectorAll(".dashMenuitem");
		items.forEach((el) =>
			el.addEventListener("click", (e) => {
				const active = document.querySelector(".dashboardIcon.active");
				active?.classList.remove("active");
				const target = el.firstChild;
				target.classList.add("active");
				const indicatorTop = target.offsetTop - target.offsetHeight;
				document.querySelector(
					".indicator"
				).style.top = `${indicatorTop}px`;
			})
		);
	};
	useEffect(() => {
		dispatch(getLogo());
		dashItemClick();
		const target = document.querySelector(".dashboardIcon.active");
		const indicatorTop = target.offsetTop - target.offsetHeight;
		document.querySelector(".indicator").style.top = `${indicatorTop}px`;
	}, [logo]);
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
					style={{ height: "12rem" }}>
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
					<Link to={`${url}/Healthcamp`}>
						<div className='d-flex align-items-center dashMenuitem'>
							<span className='healthcare_icon dashboardIcon '></span>
							<span className='Dashitem'>Healthcamp</span>
						</div>
					</Link>
					<div className='d-flex align-items-center dashMenuitem'>
						<span className='user_icon dashboardIcon'></span>
						<span className='Dashitem'>Users</span>
					</div>
					<div className='d-flex align-items-center dashMenuitem'>
						<span className='settings_icon dashboardIcon'></span>
						<span className='Dashitem'>Settings</span>
					</div>
				</div>
			</div>
			<Switch>
				<Route exact path={path}>
					<DashboardScreen />
					{/* <div className='dashboardMain col-10   py-4 px-3'>
						<h3>Dashboard</h3>
						<div
							className='d-flex flex-wrap justify-content-between'
							style={{ height: "86vh" }}>
							<div className='records  '>
								<Records />
							</div>
							<div className='canlender '>
								<UpcomingHealthcamp />
							</div>
						</div>
					</div> */}
				</Route>
				<Route path={`${path}/:topicId`}>
					{/* <Topic /> */}
					<h3 className='text-secondary'>someting</h3>
				</Route>
			</Switch>
		</div>
	);
}
