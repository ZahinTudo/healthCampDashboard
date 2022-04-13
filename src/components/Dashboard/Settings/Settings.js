import {
	faAngleDown,
	faArrowDown,
	faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Settings.css";
import { Form } from "react-bootstrap";
import ColorPicker from "./ColorPicker/ColorPicker";
import { useSelector } from "react-redux";
import {
	NormalInputs,
	PhoneInputs,
} from "../../ModularComponents/Inputs/Inputs";

export default function Settings(props) {
	// const useDispatch()
	const [disable, setDisable] = React.useState(true);
	const [showPicker, setShowPicker] = React.useState(false);
	const { color } = useSelector((state) => state.color);
	const HandleColorScheme = () => {
		setShowPicker(!showPicker);
	};
	return (
		<div className='p-3 w-100'>
			<div className='d-flex align-items-center '>
				{props.children}
				<h3 className='screenTitle mb-0'>Settings</h3>
			</div>
			<div className='settings_parts'>
				<div className='organisational_details'>
					<div className='d-flex align-items-center justify-content-between w-100 mb-4'>
						<h3 className='title mb-0'>Organisation details</h3>
						<div
							className='editBtn'
							style={{ cursor: "pointer" }}
							onClick={() => setDisable(!disable)}>
							{/* <FontAwesomeIcon icon={faPencilSquare} /> */}
							{disable ? (
								<svg
									width='30'
									height='30'
									viewBox='0 0 44 44'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M34.1468 14.593L29.6518 10.2647C29.0651 9.73403 28.2964 9.42956 27.4918 9.40918C26.6872 9.38879 25.9029 9.6539 25.288 10.1541L10.5235 24.3713C9.99323 24.8863 9.66306 25.5612 9.58841 26.2828L8.88299 32.8701C8.86089 33.1015 8.89207 33.3347 8.97431 33.5531C9.05654 33.7716 9.1878 33.9698 9.35874 34.1338C9.51203 34.2803 9.69382 34.3961 9.8937 34.4747C10.0936 34.5533 10.3076 34.5932 10.5235 34.592H10.6711L17.5121 33.9917C18.2614 33.9198 18.9623 33.6019 19.4971 33.0912L34.2616 18.874C34.8347 18.291 35.1444 17.5131 35.1228 16.7107C35.1013 15.9082 34.7503 15.1467 34.1468 14.593ZM28.5691 19.8692L24.1725 15.6356L27.3715 12.4762L31.8501 16.7888L28.5691 19.8692Z'
										fill={color}
									/>
									<rect
										x='0.5'
										y='0.5'
										width='43'
										height='43'
										rx='7.5'
										stroke={color}
									/>
								</svg>
							) : (
								<div className='btn saveBtn'>Save</div>
							)}
						</div>
					</div>
					<div className='org_name'>
						<NormalInputs
							label={"Organisation name "}
							type={"text"}
							placeholder={"City hospital"}
							disabled={disable}
						/>
					</div>
					<div className='org_email'>
						<NormalInputs
							label={"Email "}
							type={"email"}
							placeholder={"cityhospital@gmail.com"}
							disabled={disable}
						/>
					</div>
					<div className='org_contactPerson'>
						<NormalInputs
							label={"Contact person"}
							type={"text"}
							placeholder={"Rajesh Kumar"}
							disabled={disable}
						/>
					</div>
					<div className='org_contactPerson'>
						<PhoneInputs
							data={[{ name: "+88", value: "+88" }]}
							label={"Contact person"}
							type={"tel"}
							placeholder={"Phone Number"}
							disabled={disable}
						/>
					</div>
				</div>
				<div className='LogoAndcolor'>
					<div className='d-flex flex-column align-items-center justify-content-center'>
						<div
							style={{
								width: "10rem",
								height: "10rem",
								borderRadius: "50%",
								background: "#C4C4C4",
							}}></div>
						<div className='d-flex changeRemove'>
							<p className='change'>Change Logo</p>
							<span className='mx-2'>|</span>
							<p className='remove'>Remove Logo</p>
						</div>
					</div>
					<div className='colorPicking d-flex justify-content-between w-100'>
						<p>Color</p>
						{/* <input type='color' name='' id='' /> */}
						<div className='position-relative'>
							<div
								onClick={HandleColorScheme}
								className='colorPickWrapper d-flex align-items-center p-2 border'>
								<div
									className='colorBox me-2'
									style={{
										backgroundColor: `${color}`,
									}}></div>
								<FontAwesomeIcon icon={faAngleDown} />
							</div>
							<div
								className='position-absolute'
								style={{ right: "0" }}>
								{showPicker ? <ColorPicker /> : ""}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
