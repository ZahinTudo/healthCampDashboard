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
					<div className='d-flex align-items-center justify-content-between w-100'>
						<h3 className='title'>Organisation details</h3>
						<div
							className='editBtn'
							style={{ cursor: "pointer" }}
							onClick={() => setDisable(!disable)}>
							{/* <FontAwesomeIcon icon={faPencilSquare} /> */}
							{disable ? (
								<img
									className='img-fluid'
									src='/assets/images/editIcon.svg'
									alt=''
									srcset=''
								/>
							) : (
								<div className='saveBtn'>Save</div>
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
						{/* <Form.Group className='mb-3' controlId='org_name'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								disabled={disable}
								type='text'
								placeholder='City hospital'
							/>
						</Form.Group> */}
					</div>
					<div className='org_email'>
						<NormalInputs
							label={"Email "}
							type={"email"}
							placeholder={"cityhospital@gmail.com"}
							disabled={disable}
						/>
						{/* <Form.Group className='mb-3' controlId='org_name'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								disabled={disable}
								type='email'
								placeholder='cityhospital@gmail.com'
							/>
						</Form.Group> */}
					</div>
					<div className='org_contactPerson'>
						<NormalInputs
							label={"Contact person"}
							type={"text"}
							placeholder={"Rajesh Kumar"}
							disabled={disable}
						/>
						{/* <Form.Group className='mb-3' controlId='org_name'>
							<Form.Label>Contact person</Form.Label>
							<Form.Control
								disabled={disable}
								type='text'
								placeholder='Rajesh Kumar'
							/>
						</Form.Group> */}
					</div>
					<div className='org_contactPerson'>
						<PhoneInputs
							data={[{ name: "+88", value: "+88" }]}
							label={"Contact person"}
							type={"tel"}
							placeholder={"Phone Number"}
							disabled={disable}
						/>
						{/* <Form.Group className='mb-3' controlId='org_name'>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								disabled={disable}
								type='phone'
								placeholder='Phone Number'
							/>
						</Form.Group> */}
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
