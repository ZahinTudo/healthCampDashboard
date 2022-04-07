import React, { useEffect } from "react";
import useWrapperHeight from "../../../../../CustomHooks/useWrapperHeight";
import "./Reports.css";
import $ from "jquery";
import VerticallyCenteredModal from "../../../Modal/VerticallyCenteredModal";

export default function Reports({ pdf }) {
	const data1 = ["RTPCR Report", "RTPCR Report", "RTPCR Report"];
	const data2 = ["COVID19 Vaccin", "COVID19 Vaccin", "COVID19 Vaccin"];
	const [StoptLoop, setStoptLoop] = React.useState(true);
	const [Data, setData] = React.useState(data1);
	const [modalBtn, setModalBtn] = React.useState("record");
	const [modalShow, setModalShow] = React.useState(false);
	const [modalType, setModalType] = React.useState("");
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
			$(".tabtitle").each((i, obj) => {
				if ($(obj).hasClass("active")) {
					$(obj).removeClass("active");
				}
			});
			$(e.target).addClass("active");
		});
	};
	function DownloadFile(url, fileName) {
		fetch(url)
			.then((res) => {
				if (res.status == 200) {
					return res.blob;
				} else {
					return res.text;
				}
			})
			.then((result) => {
				var blob = new Blob([result], {
					type: "application/octetstream",
				});

				//Check the Browser type and download the File.
				var isIE = false || !!document.documentMode;
				if (isIE) {
					window.navigator.msSaveBlob(blob, fileName);
				} else {
					var url = window.URL || window.webkitURL;
					const link = url.createObjectURL(blob);
					var a = $("<a />");
					a.attr("download", fileName);
					a.attr("href", link);
					$("body").append(a);
					a[0].click();
					$("body").remove(a);
				}
			});
	}
	useEffect(() => {
		handleTabSwitch();
	});
	return (
		<div className='reports'>
			<div className='reportsHead'>
				<VerticallyCenteredModal
					type={modalType}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<div
					style={{ paddingBottom: "1rem" }}
					className='d-flex  justify-content-between align-items-center '>
					<div>
						<span
							onClick={() => {
								setData(data1);
								setModalBtn("record");
							}}
							className='tabtitle active me-3'>
							Healthrecords
						</span>
						<span
							onClick={() => {
								setData(data2);
								setModalBtn("camp");
							}}
							className='tabtitle'>
							Healthcamps Attended
						</span>
					</div>

					{modalBtn == "record" ? (
						<div
							onClick={() => {
								setModalType("addrecord");
								setModalShow(true);
							}}>
							<span className='addBtn d-flex align-items-center'>
								<span>
									<img
										src='/assets/images/record.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span className='ms-2'>Add Healthrecord</span>
							</span>
						</div>
					) : (
						<div
							onClick={() => {
								setModalType("addcamp");
								setModalShow(true);
							}}>
							<span className='addBtn d-flex align-items-center'>
								<span>
									<img
										src='/assets/images/record.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span className='ms-2'>Add Healthcamp</span>
							</span>
						</div>
					)}
				</div>
				<div className='d-flex'>
					<div className='col-3 tableHead'>Reference Name</div>
					<div className='col-3 tableHead'>Type</div>
					<div className='col-3 tableHead'>Date</div>
					<div className='col-3 tableHead'>Action</div>
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
									<span
										className=''
										onClick={() => {
											// alert("clicked");
											pdf(
												"https://africau.edu/images/default/sample.pdf"
											);
										}}>
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
											onClick={() => {
												setModalType("editrecord");
												setModalShow(true);
											}}
											style={{
												width: "2.5rem",
												cursor: "pointer",
											}}
											src='/assets/images/edit.svg'
											alt=''
											className='img-fluid'
										/>
									</span>
									<span
									// onClick={() =>
									// 	DownloadFile(
									// 		"https://africau.edu/images/default/sample.pdf",
									// 		"pdf"
									// 	)
									// }
									>
										<a
											href='https://africau.edu/images/default/sample.pdf'
											target='_blank'
											download='pdf'
											rel='noopener noreferrer'>
											<img
												style={{
													width: "2.5rem",
													cursor: "pointer",
												}}
												src='/assets/images/download.svg'
												alt=''
												className='img-fluid'
											/>
										</a>
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
