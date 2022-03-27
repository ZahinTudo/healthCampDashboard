import React, { useEffect, useState } from "react";
import {
	Dropdown,
	DropdownButton,
	FormControl,
	InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogo, setLogo } from "../../Redux/LocalStorage";

export default function Login() {
	const { logo } = useSelector((state) => state.logo);
	const dispatch = useDispatch();

	const [passIcon, setPassIcon] = useState(false);
	const [passType, setPassType] = useState(true);
	// const [loginLogo, setLoginLogo] = useState(null);
	useEffect(() => {
		dispatch(getLogo());

		// const logo = localStorage.getItem("logo");
		// if (logo) {
		// 	console.log(logo);
		// 	setLoginLogo(logo);
		// }
	}, [logo]);

	const setLocal = () => {
		dispatch(setLogo());
		// const logo = localStorage.getItem("logo");
		// console.log(logo);
		// if (!logo) {
		// 	localStorage.setItem(
		// 		"logo",
		// 		"http://www.dailyrounds.org/blog/wp-content/uploads/2015/05/caduceus.jpg"
		// 	);
		// }
	};
	return (
		<div className='login position-relative'>
			<div className='mask1 position-absolute'></div>
			<div className='mask2 position-absolute'></div>
			<div className='inputs_wrapper'>
				<div className='d-flex justify-content-center my-3'>
					{logo ? (
						<div className='' style={{ width: "25%" }}>
							<img
								src={logo}
								className='img-fluid'
								alt=''
								srcset=''
							/>
						</div>
					) : (
						<div className='bg-secondary p-3 d-flex align-items-center justify-content-center w-50'>
							<h3 className='text-center m-0 '>LOGO</h3>
						</div>
					)}
				</div>
				<h3 className='text-center title'>Login</h3>
				<p className='text-center login_brief'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
					aliquam, faucibus morbi ut.
				</p>
				<label htmlFor='phone'>Phone Number</label>
				<InputGroup id='phone' className='mb-3'>
					<DropdownButton
						variant='outline-secondary'
						title='+91'
						id='input-group-dropdown-1'>
						<Dropdown.Item href='#'>+88</Dropdown.Item>
						<Dropdown.Item href='#'>+99</Dropdown.Item>
					</DropdownButton>
					<FormControl
						id='phoneInput'
						placeholder='Phone Number'
						aria-label='Phone Number'
					/>
				</InputGroup>

				<label htmlFor='pass'>Password</label>
				<div className='position-relative'>
					<FormControl
						id='pass'
						placeholder='password'
						type={passType ? "password" : "text"}
						aria-label='password'
					/>
					<span
						onClick={() => {
							setPassIcon(!passIcon);
							setPassType(!passType);
						}}
						className='position-absolute'
						style={{ right: "2%", top: "16%" }}>
						<FontAwesomeIcon icon={passIcon ? faEye : faEyeSlash} />
					</span>
				</div>
				<Link
					to='/dashboard'
					onClick={setLocal}
					className='d-flex justify-content-center d-inline-block'>
					<a className=' mt-4 mb-3 custom_btn '>Login</a>
				</Link>
				<div className='text-center mt-4'>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Forgot your password?
					</a>
				</div>
			</div>
		</div>
	);
}
