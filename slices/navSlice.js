import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scrollTop: 0,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setScrollTop: ( state, action ) => {
            state.scrollTop = action.payload;
        },
    }
})

export const { setScrollTop } = navSlice.actions;

export const selectScrollTop = (state) => state.nav.scrollTop;

export default navSlice.reducer;