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

export const getTimeSchedulesPerCinemaAndMovie = (cinemaId,movieId) => {
    return api.get(`/schedules?cinemaId=${cinemaId}&movieId=${movieId}`)
}
export const getCinemabyMovieId = (id) => {
    return api.get(`/schedules/cinemas?movieId=${id}`);
}

export const getOrderDetailsByTransacId = (id) => {
    return api.get(`orders?transactionId=${id}`);
}
