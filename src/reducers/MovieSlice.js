import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
    ids: ["1","2"],
    entities: {
        1: {
            id: "1",
            movieTitle: "Wreck It Ralph",
            rating: "10/10",
            price: "250php"
        },
        2: {
            id: "2",
            movieTitle: "Titanic",
            rating: "9/10",
            price: "250php"
        }
    },
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        AddCinemas(state, action) {
            moviesAdapter.addMany(state, action.payload);
        }
    },
})
export const { AddCinemas } = moviesSlice.actions;

export default moviesSlice.reducer;

export const {
    selectIds: selectMovieIds,
    selectById: selectMovieById
} = moviesAdapter.getSelectors((state) => state.movieList);