import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
    ids: [],
    entities: {  
    }, 
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        AddMovies(state, action) {
            moviesAdapter.setAll(state, action.payload.map(item => ({id: item.movieId, ...{item}})));
        }
    },
})
export const { AddMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

export const {
    selectIds: selectMovieIds,
    selectById: selectMovieById
} = moviesAdapter.getSelectors((state) => state.movieList);