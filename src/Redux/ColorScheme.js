import { createSlice } from "@reduxjs/toolkit";

export const ColorScheme = createSlice({
	name: "color",
	initialState: {
		color: "#076EB3",
	},
	reducers: {
		setColor: (state, action) => {
			state.color = action.payload;
		},
	},
});
export const { setColor } = ColorScheme.actions;

export default ColorScheme.reducer;
