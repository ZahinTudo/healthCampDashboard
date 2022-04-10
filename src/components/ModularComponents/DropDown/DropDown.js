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
	const handleclick = () => {
		setShow(!show);
	};
	const sliderHandle = () => {};
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

						// marginTop: "2.18rem",
					}}
					className='OptioninnerWrapper'>
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
						<div></div>
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
