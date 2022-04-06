import { faBars, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Activities from "../Activities/Activities";
import HealthCamps from "./HealthCamps/HealthCamps";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";
import "./DashboardScreen.css";
import useWrapperHeight from "../../../CustomHooks/useWrapperHeight";

export default function DashboardScreen(props) {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	useWrapperHeight("dashcamps", "info_cards", "Healthcamps");
	return (
		<div className='w-100 p-3 dashboardScreen'>
			<div className='d-flex align-items-center '>
				{props.children}
				<h3 className='screenTitle mb-0'>Dashboard</h3>
			</div>
			<div className='dashboard_prts'>
				<div className='dashcamps '>
					<div className='info_cards'>
						<div className='col-12 card'>
							<p
								className='fs-1 m-0 number'
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
					<div className='Healthcamps  mt-2' style={{}}>
						<HealthCamps />
					</div>
				</div>
				<Activities add={true} />
			</div>
		</div>
	);
}
