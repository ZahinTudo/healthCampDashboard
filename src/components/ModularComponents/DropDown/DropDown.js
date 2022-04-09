import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "jquery";
import React, { useEffect, useRef } from "react";
import Search from "../Search/Search";
import "./DropDown.css";

export default function DropDown(props) {
	const dropBtn = useRef(null);
	const [show, setShow] = React.useState(false);
	const handleclick = () => {
		setShow(!show);
	};
	useEffect(() => {}, []);
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
				}}
				className={`dropOptions ${
					show ? "d-flex flex-column" : "d-none"
				}`}
				ref={dropBtn}>
				{comp()}
				{/* <Search className={"w-100"} />

				<div
					style={{
						minHeight: "2rem",
						maxHeight: props.height - 10 + "rem",
						minWidth: "max-content",
						Width: "100%",
						marginTop: "2.18rem",
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
				</div> */}
				{/* <div className='mb-2'>
					<input
						className='me-2'
						type='checkbox'
						name='mod'
						id='mod'
					/>
					<label htmlFor='mod'>Moderator</label>
				</div>
				<div>
					<input
						className='me-2'
						type='checkbox'
						name='admin'
						id='admin'
					/>
					<label htmlFor='admin'>Admin</label>
				</div> */}
			</div>
		</div>
	);
}
