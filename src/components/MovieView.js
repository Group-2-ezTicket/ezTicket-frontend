import React, { useEffect, useState } from 'react'
import '../styles/MovieDetails.css'
import {  Button, Space, Rate, DatePicker, Divider, Radio } from 'antd';
import { getMovie, getCinemaByCinemaId } from '../apis/cinema'
import { AddMovie } from '../reducers/MovieSlice'
import { useDispatch, useSelector } from "react-redux"
import { selectMovieById } from '../reducers/MovieSlice'
import {Link} from 'react-router-dom';

function MovieView() {
    const movieId = window.location.pathname.replace('/movies/', '')
    const cinemaId = window.location.search.split("=")[1]
    const [cinema, setCinema] = useState({}); 
    const [timeSlot, setTimeSlot] = useState(); 
    const [day, setDay] = useState(); 

    function onChange(date, dateString) {
        console.log("Cute date: ", setDay(dateString));
        console.log("sad date: ", day);
    }

    
    function onChangeTimeSlot(e) {
        console.log(`radio checked:${e.target.value}`);
        setTimeSlot(e.target.value);
        console.log("SAdsad: ", timeSlot);
    }
    
    const dispatch = useDispatch()

    useEffect(() => {
        getMovie(movieId).then((response) => {
            dispatch(AddMovie(response.data));
        })
        getCinemaByCinemaId(cinemaId).then((response) => {
            setCinema(response.data)
        })
    },[movieId , cinemaId, dispatch]);

    const movie = useSelector((state) => selectMovieById(state, movieId));

    if (movie) {
        let time = movie.duration;
        var hours = Math.floor(time / 60)
        var minutes = time % 60
        var totalTime = `${hours} Hours ${minutes} Minutes`;

        const summaryDetails = {
            movie: movie.movieTitle,
            cinema: cinema.name,
            date: day,
            time: timeSlot,
            seats: 3,
            price: movie.price,
            totalPrice: 3 * movie.price
        }

        return (
            <div>
                <table id="movie-details">
                    <tbody>
                        <tr>
                            <td id="movie-poster-table"><img id="movie-poster" alt="poster" src={`../images/poster-${movie.id}.jpg`} /></td>
                            <td id="movie-description">
                                <h2>{cinema.name}</h2>
                                <b id="movie-pg">PG-13 | {movie.genre}</b>
                                <h1 id="movie-title">{movie.movieTitle}</h1>
                                <b id="movie-duration">{totalTime}</b><br />
                                <Rate defaultValue={movie.rating} disabled='true'></Rate><br />
                                <b id="movie-pg">PHP {movie.price}</b><br />
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
                    <Radio.Group onChange={onChangeTimeSlot} defaultValue="a">
                        <Radio.Button value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</Radio.Button>
                        <Radio.Button value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</Radio.Button>
                        <Radio.Button value="6:00 PM - 8:00 AM">6:00 PM - 8:00 AM</Radio.Button>
                        <Radio.Button value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</Radio.Button>
                    </Radio.Group>
                    </div>

                    <Button type="primary">
                        <Link 
                            to={{
                                pathname: "/checkout",
                                state: summaryDetails
                            }}>Submit Reservation</Link></Button>
                </div>
            </div >
        );
    }
    return (
        <div>Loading... Movie maybe not be available.</div>
    )

}

export default MovieView;
