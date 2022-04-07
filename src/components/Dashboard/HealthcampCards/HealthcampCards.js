import {
	faArrowDownShortWide,
	faEllipsisV,
	faLocationDot,
	faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HealthcampCards.css";
import React, { useEffect } from "react";
import useWindowResize from "../../../CustomHooks/useWindowResize";
import {
	Link,
	Route,
	Switch,
	useLocation,
	useRouteMatch,
} from "react-router-dom";
import VerticallyCenteredModal from "../Modal/VerticallyCenteredModal";
import DetailCamp from "../DetailCamp/DetailCamp";

export default function HealthcampCards({ parent, head, target, column }) {
	const location = useLocation();
	const { width } = useWindowResize();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
	let { path, url } = useRouteMatch();

	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const wrapperDynamicHeight = () => {
		const Parent = document.querySelector(`.${parent}`);
		const Head = document.querySelector(`.${head}`);
		const cardWrapper = document.querySelector(`${target}`);
		if (width <= 600) {
			cardWrapper.style.height = "auto";
			return;
		}
		// console.log(
		// 	Parent,
		// 	"\n",
		// 	Head,
		// 	"\n",
		// 	cardWrapper,
		// 	getInnerHeight(Parent),
		// 	getInnerHeight(Head)
		// );

		cardWrapper.style.height =
			getInnerHeight(Parent) - getInnerHeight(Head) + "px";
	};
	useEffect(() => {
		console.log(location);

		wrapperDynamicHeight();
	}, [location.pathname]);

	return (
		<div
			className='row   gy-4 gx-5 mt-sm-2 cardWrapper py-3'
			style={{ overflowX: "scroll" }}>
			<VerticallyCenteredModal
				type={modalType}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, ind) => (
				<div className={`col-${column}`}>
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
								onClick={() => {
									setModalType("editCamp");
									setModalShow(true);
								}}
								className='position-absolute text-white '
								style={{
									top: "1.2rem",
									right: "1rem",
									cursor: "pointer",
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
						<Link className='d-inline-block' to={`${url}/${item}`}>
							<div className='py-2 px-3'>
								<div className='campName'>Healthcamp 1</div>
								<div className='location'>
									<span>
										<FontAwesomeIcon icon={faLocationDot} />
									</span>{" "}
									Location
								</div>
								<div className='time'>9:00-10:00 AM</div>
							</div>
						</Link>
					</div>
				</div>
			))}
			{/* <Switch>
				<Route path={`${path}/:topicId`}>
					<DetailCamp />
				</Route>
			</Switch> */}
		</div>
	);
}
