import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const cinemasAdapter = createEntityAdapter();
const initialState = cinemasAdapter.getInitialState({
    ids: [],
    entities: {  
    }, 
});

const cinemasSlice = createSlice({
    name: "cinemas",
    initialState,
    reducers: {
        AddCinemas(state, action) {
            cinemasAdapter.addMany(state, action.payload.map(item => ({id: item.cinemaId, value: item.name})));
        }
    },
})
export const { AddCinemas } = cinemasSlice.actions;

export default cinemasSlice.reducer;

export const {
    selectAll: selectCinemas,
    selectIds: selectCinemaIds,
    selectById: selectCinemaById
} = cinemasAdapter.getSelectors((state) => state.cinemaList);