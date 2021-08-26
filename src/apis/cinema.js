import api from "./api";

export const getCinemas = () => {
    return api.get("/cinemas");
}

export const getCinemaByCinemaId = (id) => {
    return api.get(`/cinemas/${id}`)
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

export const getCinemasbyMovieId = (id) => {
    return api.get(`/schedules/cinemas?movieId=${id}`);
}

export const getSeatsByScheduleId = (id)=> {
    return api.get(`/seats?scheduleId=${id}`);
}

export const addOrder = (order) => {
    return api.post(order);
}
