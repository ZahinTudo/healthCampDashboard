import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowResize from "./useWindowResize";

export default function useWrapperHeight(parent, head) {
	const location = useLocation();
	const { width } = useWindowResize();
	const getInnerHeight = (elm) => {
		var computed = getComputedStyle(elm),
			padding =
				parseInt(computed.paddingTop) +
				parseInt(computed.paddingBottom);

		return elm.clientHeight - padding;
	};
	const wrapperDynamicHeight = () => {
		const Parent = document.querySelector(`.${parent}`);
		const Head = document.querySelector(`.${head}`);
		const cardWrapper = document.querySelector(".cardWrapper");
		cardWrapper.style.height =
			getInnerHeight(Parent) - getInnerHeight(Head) + "px";
	};
	useEffect(() => {
		console.log(location);

		wrapperDynamicHeight();
	}, [width, location.pathname]);
}
