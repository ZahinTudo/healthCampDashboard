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
import { getColor } from "../../Redux/ColorScheme";
export default function Dashboard() {
	const { color } = useSelector((state) => state.color);
	// console.log(color);
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
				console.log(colorTarget.style.background);
				// colorTarget. =
				// 	"linear-gradient(90deg, #2EA8FA 0%, #076EB3 100%)";
			})
		);
	};
	const sidebarOpen = () => {
		const sidebar = document.getElementsByClassName("sideBar")[0];
		sidebar.classList.add("open");
	};
	useEffect(() => {
		dispatch(getColor());
		var bodyStyles = document.body.style;
		bodyStyles.setProperty("--color", color);

		dispatch(getLogo());
		dashItemClick();
		const target = document.querySelector(".dashboardIcon.active");
		const indicatorTop = target.offsetTop - target.offsetHeight;
		document.querySelector(".indicator").style.top = `${indicatorTop}px`;
	}, [logo, color]);
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
						{/* <img
							className='img-fluid'
							src='/assets/images/indicator.svg'
							alt=''
							srcset=''
						/> */}
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
							{/* <svg
								width='20'
								height='22'
								viewBox='0 0 20 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V19C0 19.7956 0.316071 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V10H18V19ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H4V5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5V4H14V5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4804 5.89464 14.7348 6 15 6C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z'
									fill={color}
								/>
							</svg> */}

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
							{/* <svg
								width='21'
								height='22'
								viewBox='0 0 21 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M18.8191 6.62361L18.1967 5.54352C17.6701 4.6296 16.5032 4.31432 15.588 4.83872C15.1524 5.09534 14.6325 5.16815 14.1432 5.04109C13.6538 4.91402 13.235 4.59752 12.9793 4.16137C12.8148 3.88415 12.7263 3.56839 12.723 3.24604C12.7378 2.72922 12.5429 2.2284 12.1825 1.85767C11.8221 1.48694 11.327 1.27786 10.81 1.27808H9.55595C9.04942 1.27808 8.56376 1.47991 8.20645 1.83895C7.84914 2.19798 7.64963 2.68459 7.65206 3.19112C7.63705 4.23693 6.78493 5.07681 5.73902 5.0767C5.41666 5.07336 5.10091 4.98494 4.82369 4.82041C3.90851 4.29601 2.74156 4.61129 2.21499 5.52522L1.5468 6.62361C1.02086 7.53639 1.33185 8.70261 2.24245 9.23231C2.83435 9.57404 3.19898 10.2056 3.19898 10.8891C3.19898 11.5725 2.83435 12.2041 2.24245 12.5458C1.33301 13.0719 1.02168 14.2353 1.5468 15.1454L2.17838 16.2346C2.4251 16.6798 2.83905 17.0083 3.32864 17.1474C3.81823 17.2866 4.34309 17.2249 4.78707 16.976C5.22353 16.7213 5.74364 16.6516 6.23179 16.7822C6.71994 16.9128 7.13569 17.233 7.38661 17.6717C7.55115 17.9489 7.63956 18.2646 7.64291 18.587C7.64291 19.6435 8.49941 20.5 9.55595 20.5H10.81C11.8629 20.5 12.718 19.6491 12.723 18.5962C12.7205 18.088 12.9213 17.6 13.2806 17.2407C13.6399 16.8814 14.1279 16.6807 14.636 16.6831C14.9576 16.6917 15.2721 16.7798 15.5514 16.9394C16.4642 17.4653 17.6304 17.1544 18.1601 16.2438L18.8191 15.1454C19.0742 14.7075 19.1442 14.186 19.0137 13.6964C18.8831 13.2067 18.5627 12.7894 18.1235 12.5367C17.6842 12.284 17.3638 11.8666 17.2333 11.3769C17.1027 10.8873 17.1727 10.3658 17.4278 9.92796C17.5937 9.63834 17.8338 9.3982 18.1235 9.23231C19.0286 8.70289 19.3389 7.54349 18.8191 6.63277V6.62361Z'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									fill={color}
								/>
								<path
									d='M10.1875 13.5249C11.6433 13.5249 12.8235 12.3448 12.8235 10.8889C12.8235 9.43311 11.6433 8.25293 10.1875 8.25293C8.73169 8.25293 7.55151 9.43311 7.55151 10.8889C7.55151 12.3448 8.73169 13.5249 10.1875 13.5249Z'
									// fill={color}
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg> */}

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
