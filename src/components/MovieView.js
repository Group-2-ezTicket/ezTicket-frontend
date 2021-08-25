import React, { useEffect } from 'react'
import '../styles/MovieDetails.css'
import {  Button, Space, Rate, DatePicker, Divider } from 'antd';
import { getMovie } from '../apis/cinema'
import { AddMovie } from '../reducers/MovieSlice'
import { useDispatch, useSelector } from "react-redux"
import { selectMovieById } from '../reducers/MovieSlice'
import FoodPackages from './FoodPackages';
import SeatList from './SeatList';

function MovieView(props) {
    const movieId = window.location.pathname.replace('/movies/', '')
    // const movieId = 1;
    const cinemaId = window.location.search.split("=")[1]
    console.log("cinemaId:", cinemaId);

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getMovie(movieId).then((response) => {
            dispatch(AddMovie(response.data));
        })
    });

    const movie = useSelector((state) => selectMovieById(state, movieId));

    if (movie) {

        let time = movie.duration;
        var hours = Math.floor(time / 60)
        var minutes = time % 60
        var totalTime = `${hours} Hours ${minutes} Minutes`;

        return (
            <div>
                <table id="movie-details">
                    <tbody>
                        <tr>
                            <td id="movie-poster-table"><img id="movie-poster" alt="poster" src={`../images/poster-${movie.id}.jpg`} /></td>
                            <td id="movie-description">
                                <b id="movie-pg">PG-13 | {movie.genre}</b>
                                <h1 id="movie-title">{movie.movieTitle}</h1>
                                <b id="movie-duration">{totalTime}</b><br />
                                <Rate defaultValue={movie.rating} disabled='true'></Rate>
                                <p id="movie-synopsis">{movie.synopsis}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Divider />
                <div id="seat-and-schedule">
                    <h1>Seat and Schedule</h1>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                    </Space>
                    <div className="time-schedules">
                        <Button>9:00 AM - 11:00 AM</Button>
                        <Button>1:00 PM - 3:00 PM</Button>
                        <Button>9:00 AM - 11:00 AM</Button>
                        <Button>1:00 PM - 3:00 PM</Button>
                    </div>
                    <div className="seatList">
                        <SeatList></SeatList>
                    </div>
                    <Button type="primary"><Link to="/checkout">Submit Reservation</Link></Button>
                </div>
                <FoodPackages></FoodPackages>
            </div >
        );
    }
    return (
        <div>Loading... Movie maybe not be available.</div>
    )

}

export default MovieView;
