import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "activeNav",
    initialState: { active: "home" },
    reducers: {
        updateActivePath(state, action) {
            state.active = action.payload
        }
    }
});

export const { updateActivePath } = navSlice.actions
export default navSlice.reducer;