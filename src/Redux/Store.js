import { configureStore } from "@reduxjs/toolkit";
import logoStore from "./LocalStorage";
import locationUrl from "./locationUrl";

export default configureStore({
	reducer: {
		logo: logoStore,
		location: locationUrl,
	},
});
