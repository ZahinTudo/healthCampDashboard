import React, { useEffect } from "react";
import useWrapperHeight from "../../../../../CustomHooks/useWrapperHeight";
import "./Reports.css";
import $ from "jquery";

export default function Reports() {
	const data1 = ["RTPCR Report", "RTPCR Report", "RTPCR Report"];
	const data2 = ["COVID19 Vaccin", "COVID19 Vaccin", "COVID19 Vaccin"];
	const [StoptLoop, setStoptLoop] = React.useState(true);
	const [Data, setData] = React.useState(data1);
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
	setTimeout(() => {
		wrapperDynamicHeight("healthrecords", "reportsHead", "listWrapper");
		setStoptLoop(false);
	}, 2000);
	const handleTabSwitch = () => {
		const tabs = document.getElementsByClassName("tabtitle");
		$(".tabtitle").on("click", (e) => {
			// console.log(e);
			// const target = e.target;
			// $(target).addclass("active");
			$(".tabtitle").each((i, obj) => {
				if ($(obj).hasClass("active")) {
					$(obj).removeClass("active");
				}
			});
			$(e.target).addClass("active");
			// console.log($(e.target).addClass("active"));
		});
	};
	useEffect(() => {
		handleTabSwitch();
	});
	return (
		<div className='reports'>
			<div className='reportsHead'>
				<div className='d-flex  justify-content-between align-items-center '>
					<div>
						<span
							onClick={() => setData(data1)}
							className='tabtitle active me-3'>
							Healthrecords
						</span>
						<span
							onClick={() => setData(data2)}
							className='tabtitle'>
							Healthcamps Attended
						</span>
					</div>
					<div>
						<span className='addBtn d-flex align-items-center'>
							<span>
								<img
									src='/assets/images/record.svg'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span className='ms-2'>Add healthcamp</span>
						</span>
					</div>
				</div>
				<div className='d-flex mt-2'>
					<div className='col-3 tableHead'>Reference Name</div>
					<div className='col-3 tableHead'>Type</div>
					<div className='col-3 tableHead'>Date</div>
					<div className='col-3 tableHead'>action</div>
				</div>
			</div>
			<div className='listWrapper pt-2 ' style={{ overflowY: "scroll" }}>
				{StoptLoop ? (
					""
				) : (
					<span>
						{Data.map((item, ind) => (
							<div className='d-flex my-2 listItem align-items-center'>
								<div className='col-3 name'>{item}</div>
								<div className='col-3 type'>Report</div>
								<div className='col-3 date'>22 mar 2021</div>
								<div className='col-3 actionBtn d-flex justify-content-center'>
									<span>
										<img
											style={{
												width: "2.5rem",
												cursor: "pointer",
											}}
											src='/assets/images/View.svg'
											alt=''
											className='img-fluid'
										/>
									</span>
									<span className='mx-2'>
										<img
											style={{
												width: "2.5rem",
												cursor: "pointer",
											}}
											src='/assets/images/edit.svg'
											alt=''
											className='img-fluid'
										/>
									</span>
									<span>
										<img
											style={{
												width: "2.5rem",
												cursor: "pointer",
											}}
											src='/assets/images/download.svg'
											alt=''
											className='img-fluid'
										/>
									</span>
								</div>
							</div>
						))}
					</span>
				)}
			</div>
		</div>
	);
}
