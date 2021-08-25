import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
    ids: [],
    entities: {},
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        AddMovies(state, action) {
            moviesAdapter.addMany(state, action.payload.map(item => ({ id: item.movieId, ...{ item } })));
        },
        AddMovie(state, action) {
            moviesAdapter.addOne(state, action.payload);
            console.log("Action ", action.payload);
        },
    },
})
export const { AddMovies, AddMovie } = moviesSlice.actions;

export default moviesSlice.reducer;

export const {
    selectAll: selectMovies,
    selectIds: selectMovieIds,
    selectById: selectMovieById
} = moviesAdapter.getSelectors((state) => state.movieList);