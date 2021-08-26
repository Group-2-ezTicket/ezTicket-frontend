import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const reservationAdapter = createEntityAdapter();
const initialState = reservationAdapter.getInitialState({
    ids: [],
    entities: {  
    }, 
});

const reservationSlice = createSlice({
    name: "reservations",
    initialState: initialState,
    reducers: {
        // AddMovies(state, action) {
        //     moviesAdapter.setAll(state, action.payload.map(item => ({id: item.movieId, ...{item}})));
        // },
        // AddMovie(state, action) {
        //     moviesAdapter.addOne(state, action.payload);
        //     console.log("Action ", action.payload);
        // },
    },
})

export default reservationSlice.reducer;

export const {
    selectAll: selectOrders,
} = reservationAdapter.getSelectors((state) => state.movieList);

export const selectOrderByTransacId = createSelector([selectOrders], (orders) => orders.filter((order) => order.selectOrderByTransacId));

