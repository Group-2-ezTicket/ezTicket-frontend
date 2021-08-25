import api from "./api";

export const getCinemas = () => {
    return api.get("/cinemas");
}

export const getMoviesByCinemaId = (cinemaId) => {
    return api.get(`/schedules/movies/?cinemaId=${cinemaId}`);
}

export const getMovie = (id) => {
    return api.get(`/movies/${id}`)
}