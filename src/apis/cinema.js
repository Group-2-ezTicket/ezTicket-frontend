import api from "./api";

export const getCinemas = () => {
    return api.get("/cinemas");
}

export const getMoviesByCinemaId = (id) => {
    return api.get(`/cinemas/${id}/movies`);
}

