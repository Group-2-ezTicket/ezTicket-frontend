import api from "./api";

export const getCinemas = () => {
    return api.get("/cinemas");
}

export const getMoviesByCinemaId = (id) => {
    return api.get(`/schedules/movies?cinemaId=${id}`);
}

export const getMovie = (id) => {
    return api.get(`/movies/${id}`);
}

export const getCinemabyMovieId = (id) => {
    return api.get(`/schedules/cinemas?movieId=${id}`);
}
