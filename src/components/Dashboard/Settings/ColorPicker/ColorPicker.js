import React, { useState } from "react";
import {
	GithubPicker,
	SketchPicker,
	PhotoshopPicker,
	AlphaPicker,
	SliderPicker,
	ChromePicker,
} from "react-color";
import { useDispatch } from "react-redux";
import { setColor } from "../../../../Redux/ColorScheme";

export default function ColorPicker() {
	const dispatch = useDispatch();
	const [color, setcolor] = useState("#d3d3d3");
	const handleChangeComplete = (color, event) => {
		console.log(color.hex);
		setcolor(color.hex);
		dispatch(setColor(color.hex));
		// alert(color.background);
	};

	return (
		<div>
			<ChromePicker
				color={color}
				onChangeComplete={handleChangeComplete}
			/>
		</div>
	);
}
