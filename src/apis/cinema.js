import api from "./api";

export const getCinemas = () => {
    return api.get("/cinemas");
}

export const getMoviesByCinemaId = (cinemaId) => {
    return api.get(`/schedules/movies/?cinemaId=${cinemaId}`);
}
