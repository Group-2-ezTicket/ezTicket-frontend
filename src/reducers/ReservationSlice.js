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
        AddOrders(state, action) {
            reservationAdapter.setAll(state, action.payload.map(item => ({id: item.transacID, ...{item}})));
        }
    },
})

export default reservationSlice.reducer;

export const { AddOrders } = reservationSlice.actions;

export const {
    selectAll: selectOrders,
} = reservationAdapter.getSelectors((state) => state.movieList);

export const selectOrderByTransacId = createSelector([selectOrders], (orders) => orders.filter((order) => order.selectOrderByTransacId));

