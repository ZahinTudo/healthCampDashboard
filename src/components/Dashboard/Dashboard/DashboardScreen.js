import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Activities from "../Activities/Activities";
import HealthCamps from "../HealthCamps/HealthCamps";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";
import "./DashboardScreen.css";

export default function DashboardScreen() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	return (
		<div className='w-100 p-4 dashboardScreen'>
			<h3>Dashboard</h3>
			<div className='dashboard_prts' style={{ height: "86vh" }}>
				<div className='col-12'>
					<div className='info_cards'>
						<div className='col-12 card'>
							<p
								className='fs-1 m-0 '
								style={{ color: "#888EF7" }}>
								25
							</p>
							<p className='m-0 title'>No. of Healthcamp</p>
						</div>
						<div className='col-12 card'>
							<p
								className='fs-1 m-0'
								style={{ color: "#FFBC70" }}>
								25
							</p>
							<p className='m-0 title'>No. of Health checkups</p>
						</div>
						<div className='col-12 card'>
							<p
								className='fs-1 m-0'
								style={{ color: "#3ECDB3" }}>
								25
							</p>
							<p className='m-0 title'>No. of Health checkups</p>
						</div>
					</div>
					<div
						className='Healthcamps bg-white my-2'
                        style={{ height: "calc(100% - 8rem)" }}>
                        <HealthCamps/>
                        </div>
				</div>
				<Activities />
			</div>
		</div>
	);
}
