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
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M10 13H4C3.4 13 3 13.4 3 14V20C3 20.6 3.4 21 4 21H10C10.6 21 11 20.6 11 20V14C11 13.4 10.6 13 10 13ZM10 3H4C3.4 3 3 3.4 3 4V10C3 10.6 3.4 11 4 11H10C10.6 11 11 10.6 11 10V4C11 3.4 10.6 3 10 3ZM20 16H18V14C18 13.4 17.6 13 17 13C16.4 13 16 13.4 16 14V16H14C13.4 16 13 16.4 13 17C13 17.6 13.4 18 14 18H16V20C16 20.6 16.4 21 17 21C17.6 21 18 20.6 18 20V18H20C20.6 18 21 17.6 21 17C21 16.4 20.6 16 20 16ZM20 3H14C13.4 3 13 3.4 13 4V10C13 10.6 13.4 11 14 11H20C20.6 11 21 10.6 21 10V4C21 3.4 20.6 3 20 3Z'
												fill={color}
											/>
										</svg>
									</span>
								) : (
									<img
										src='/assets/images/dashNormal.svg'
										alt=''
										className='img-fluid'
									/>
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
										width='20'
										height='22'
										viewBox='0 0 20 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M17 2H16V1C16 0.4 15.6 0 15 0C14.4 0 14 0.4 14 1V2H6V1C6 0.4 5.6 0 5 0C4.4 0 4 0.4 4 1V2H3C1.3 2 0 3.3 0 5V19C0 20.7 1.3 22 3 22H17C18.7 22 20 20.7 20 19V5C20 3.4 18.7 2 17 2ZM18 8H2V5C2 4.4 2.4 4 3 4H4V5C4 5.6 4.4 6 5 6C5.6 6 6 5.6 6 5V4H14V5C14 5.6 14.4 6 15 6C15.6 6 16 5.6 16 5V4H17C17.6 4 18 4.4 18 5V8Z'
											fill={color}
										/>
									</svg>
								) : (
									<img
										src='/assets/images/healthcamps.svg'
										alt=''
										className='img-fluid'
									/>
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
										width='25'
										height='24'
										viewBox='0 0 25 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M16.1354 13.8599C15.0002 14.6037 13.6726 14.9999 12.3154 14.9999C10.9582 14.9999 9.63058 14.6037 8.49539 13.8599C7.03159 14.548 5.7803 15.618 4.87315 16.9572C3.96599 18.2963 3.43651 19.8552 3.34039 21.4699C3.33598 21.5383 3.34569 21.6069 3.36891 21.6714C3.39214 21.7359 3.42838 21.795 3.47539 21.8449C3.52245 21.8942 3.5791 21.9334 3.64187 21.9601C3.70464 21.9868 3.7722 22.0003 3.84039 21.9999H20.8154C20.8836 22.0003 20.9511 21.9868 21.0139 21.9601C21.0767 21.9334 21.1333 21.8942 21.1804 21.8449C21.2274 21.795 21.2636 21.7359 21.2869 21.6714C21.3101 21.6069 21.3198 21.5383 21.3154 21.4699C21.2169 19.8526 20.6837 18.2919 19.772 16.9525C18.8603 15.613 17.6039 14.5446 16.1354 13.8599Z'
											fill={color}
										/>
										<path
											d='M12.3154 14C15.6291 14 18.3154 11.3137 18.3154 8C18.3154 4.68629 15.6291 2 12.3154 2C9.00172 2 6.31543 4.68629 6.31543 8C6.31543 11.3137 9.00172 14 12.3154 14Z'
											fill={color}
										/>
									</svg>
								) : (
									<img
										src='/assets/images/user.svg'
										alt=''
										className='img-fluid'
									/>
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
										width='19'
										height='20'
										viewBox='0 0 19 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M17.8191 5.37728L17.1967 4.29718C16.6701 3.38326 15.5032 3.06798 14.588 3.59238C14.1524 3.84901 13.6325 3.92181 13.1432 3.79475C12.6538 3.66768 12.235 3.35118 11.9793 2.91503C11.8148 2.63781 11.7263 2.32206 11.723 1.9997C11.7378 1.48288 11.5429 0.982064 11.1825 0.611332C10.8221 0.240599 10.327 0.0315255 9.80995 0.0317384H8.55595C8.04942 0.0317384 7.56376 0.233577 7.20645 0.592607C6.84914 0.951638 6.64963 1.43826 6.65206 1.94478C6.63705 2.99059 5.78493 3.83047 4.73902 3.83037C4.41666 3.82702 4.10091 3.73861 3.82369 3.57407C2.90851 3.04968 1.74156 3.36496 1.21499 4.27888L0.546798 5.37728C0.0208613 6.29006 0.331851 7.45627 1.24245 7.98597C1.83435 8.3277 2.19898 8.95925 2.19898 9.64272C2.19898 10.3262 1.83435 10.9577 1.24245 11.2995C0.333008 11.8256 0.0216784 12.989 0.546798 13.899L1.17838 14.9883C1.4251 15.4334 1.83905 15.762 2.32864 15.9011C2.81823 16.0402 3.34309 15.9786 3.78707 15.7297C4.22353 15.475 4.74364 15.4052 5.23179 15.5359C5.71994 15.6665 6.13569 15.9867 6.38661 16.4253C6.55115 16.7026 6.63956 17.0183 6.64291 17.3407C6.64291 18.3972 7.49941 19.2537 8.55595 19.2537H9.80995C10.8629 19.2537 11.718 18.4028 11.723 17.3498C11.7205 16.8417 11.9213 16.3537 12.2806 15.9944C12.6399 15.6351 13.1279 15.4343 13.636 15.4368C13.9576 15.4454 14.2721 15.5334 14.5514 15.6931C15.4642 16.219 16.6304 15.908 17.1601 14.9974L17.8191 13.899C18.0742 13.4612 18.1442 12.9397 18.0137 12.45C17.8831 11.9604 17.5627 11.543 17.1235 11.2903C16.6842 11.0376 16.3638 10.6202 16.2333 10.1306C16.1027 9.64097 16.1727 9.11948 16.4278 8.68162C16.5937 8.392 16.8338 8.15186 17.1235 7.98597C18.0286 7.45656 18.3389 6.29716 17.8191 5.38643V5.37728Z'
											fill={color}
										/>
										<path
											d='M10.8233 9.64284C10.8233 10.5464 10.0908 11.2788 9.18727 11.2788C8.28373 11.2788 7.55127 10.5464 7.55127 9.64284C7.55127 8.7393 8.28373 8.00684 9.18727 8.00684C10.0908 8.00684 10.8233 8.7393 10.8233 9.64284Z'
											fill={color}
											stroke='white'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								) : (
									<img
										src='/assets/images/settings.svg'
										alt=''
										className='img-fluid'
									/>
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
