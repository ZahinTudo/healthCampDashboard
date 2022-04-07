import React from "react";
import useWrapperHeight from "../../../../../CustomHooks/useWrapperHeight";
import "./Reports.css";

export default function Reports() {
	const [StoptLoop, setStoptLoop] = React.useState(true);
	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const wrapperDynamicHeight = (parent, head, wrapper) => {
		const Parent = document.querySelector(`.${parent}`);
		const Head = document.querySelector(`.${head}`);
		const cardWrapper = document.querySelector(`.${wrapper}`);
		// if (width <= 600) {
		// 	cardWrapper.style.height = "max-content";
		// 	return;
		// }
		cardWrapper.style.height =
			getInnerHeight(Parent) - getInnerHeight(Head) + "px";
	};
	// useWrapperHeight("healthrecords", "reportsHead", "listWrapper");
	setTimeout(() => {
		wrapperDynamicHeight("healthrecords", "reportsHead", "listWrapper");
		setStoptLoop(false);
	}, 2000);
	return (
		<div className='reports'>
			<div className='d-flex  justify-content-between align-items-center reportsHead'>
				<div>
					<span className='tabtitle me-3'>Healthrecords</span>
					<span className='tabtitle'>Healthrecords</span>
				</div>
				<div>
					<button>Add healthcamp</button>
				</div>
				{/* <div className='d-flex mt-2'>
					<div className='col-3'>RTPCR Report</div>
					<div className='col-3'>Report</div>
					<div className='col-3'>22 mar 2021</div>
					<div className='col-3'>action</div>
				</div> */}
			</div>
			<div className='listWrapper pt-2 ' style={{ overflowY: "scroll" }}>
				{StoptLoop ? (
					""
				) : (
					<span>
						{[
							1, 1, 1, 1, 1, 1, 2, 4, 5, 23, 54, 4, 54, 3, 3, 2,
						].map((item, ind) => (
							<div className='d-flex'>
								<div className='col-3'>RTPCR Report</div>
								<div className='col-3'>Report</div>
								<div className='col-3'>22 mar 2021</div>
								<div className='col-3'>action</div>
							</div>
						))}
					</span>
				)}
			</div>
		</div>
	);
}
