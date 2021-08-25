import { configureStore } from "@reduxjs/toolkit";
import cinemasReducer from "../reducers/CinemaSlice";
import moviesReducer from "../reducers/MovieSlice";

const store = configureStore ({
    reducer: {
        movieList: moviesReducer,
        cinemaList: cinemasReducer
    },
});


export default store;
