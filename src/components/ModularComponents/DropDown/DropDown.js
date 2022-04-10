import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "jquery";
import React, { useEffect, useRef } from "react";
import Search from "../Search/Search";
import "./DropDown.css";
import "./DropDown1.css";

export default function DropDown(props) {
	const dropBtn = useRef(null);
	const [show, setShow] = React.useState(false);
	const [min, setMin] = React.useState(25);
	const [max, setMax] = React.useState(75);
	const handleclick = () => {
		setShow(!show);
	};

	const sliderHandle = () => {
		const rangeInput = document.querySelectorAll(".range-input input");
		const progress = document.querySelector(".rangeSlider .progress");
		const ageGap = 10;
		rangeInput.forEach((input) => {
			input.addEventListener("input", (e) => {
				let minVal = parseInt(rangeInput[0].value);
				let maxVal = parseInt(rangeInput[1].value);
				if (e.target.className === "range-min") {
					setMin(minVal);
				} else setMax(maxVal);

				if (maxVal - minVal < ageGap) {
					if (e.target.className === "range-min") {
						rangeInput[0].value = maxVal - ageGap;
					} else {
						rangeInput[1].value = minVal + ageGap;
					}
				} else {
					progress.style.left =
						(minVal / rangeInput[0].max) * 100 + "%";
					progress.style.right =
						100 - (maxVal / rangeInput[1].max) * 100 + "%";
				}
			});
		});
	};
	useEffect(() => {
		sliderHandle();
	}, []);
	const comp = () => {
		if (props.type === "normal") {
			return (
				<>
					<div
						style={{
							minHeight: "2rem",
							maxHeight: props.height - 3 + "rem",
							minWidth: "max-content",
							Width: "100%",
							// marginTop: "2.18rem",
						}}
						className='OptioninnerWrapper'>
						{props.data.map((item, ind) => (
							<div
								className={`mb-${
									ind == props.data.length - 1 ? "0" : "3"
								}`}>
								<input
									style={{ marginRight: "27px" }}
									className=''
									type='checkbox'
									name={item.name}
									id={item.name}
								/>
								<label
									className='text-capitalize'
									htmlFor={item.name}>
									{item.name}
								</label>
							</div>
						))}
					</div>
				</>
			);
		} else if (props.type == "location") {
			return (
				<>
					<Search className={"w-100"} />

					<div
						style={{
							minHeight: "2rem",
							maxHeight: props.height - 10 + "rem",
							minWidth: "max-content",
							Width: "100%",
							marginTop: "2.18rem",
						}}
						className='OptioninnerWrapper'>
						{/* {comp()} */}
						{props.data.map((item, ind) => (
							<div
								className={`mb-${
									ind == props.data.length - 1 ? "0" : "3"
								}`}>
								<input
									style={{ marginRight: "27px" }}
									className=''
									type='checkbox'
									name={item.name}
									id={item.name}
								/>
								<label
									className='text-capitalize'
									htmlFor={item.name}>
									{item.name}
								</label>
							</div>
						))}
					</div>
				</>
			);
		} else if (props.type == "age") {
			return (
				<div
					style={{
						minHeight: "2rem",
						maxHeight: props.height - 3 + "rem",
						minWidth: "max-content",
						Width: "100%",
						height: props.height - 3 + "rem",

						// marginTop: "2.18rem",
					}}
					className='OptioninnerWrapper d-flex align-items-center'>
					<div className='d-flex flex-column justify-content-between'>
						<div className='d-flex justify-content-between'>
							<h5 className='selectRange text-capitalize'>
								Select range
							</h5>
							<div className='d-flex align-items-center justify-content-center '>
								<input
									className='d-flex align-items-center justify-content-center text-center'
									style={{
										width: "3rem",
										borderRadius: "20%",
										// maxWidth: "3rem",
									}}
									type='text'
								/>
								<span className='mx-2'>to</span>
								<input
									className='d-flex align-items-center justify-content-center text-center'
									style={{
										width: "3rem",
										borderRadius: "20%",
									}}
									type='text'
								/>
							</div>
						</div>
						<div className='rangeWrapper my-4'>
							<div className='rangeSlider'>
								<div className='progress'></div>
							</div>
							<div className='range-input'>
								<input
									className='range-min'
									type='range'
									value={min}
									min='0'
									max='100'
								/>
								<input
									className='range-max'
									type='range'
									value={max}
									min='0'
									max='100'
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<div className='position-relative'>
			<div className='dropBtn ' onClick={handleclick}>
				<div className='text-capitalize  label'>{props.name}</div>
				<span>
					<FontAwesomeIcon icon={faAngleDown} />
				</span>
			</div>
			<div
				style={{
					height: props.height + "rem",
					width: props.width + "rem",
					padding: props.type === "age" ? "0 20px" : "",
				}}
				className={`dropOptions ${
					show ? "d-flex flex-column" : "d-none"
				}`}
				ref={dropBtn}>
				{comp()}
			</div>
		</div>
	);
}
