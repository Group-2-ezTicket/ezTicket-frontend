import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/MovieSlice";

const store = configureStore ({
    reducer: {
        movieList: moviesReducer
    },
});


export default store;
