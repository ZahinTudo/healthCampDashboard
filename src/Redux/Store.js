import { configureStore } from "@reduxjs/toolkit";
import logoStore from "./LocalStorage";

export default configureStore({
	reducer: {
		logo: logoStore,
	},
});
