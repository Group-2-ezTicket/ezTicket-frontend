import React, { useEffect,useState } from 'react'
import '../styles/MovieDetails.css'
import { Space, Rate, DatePicker, Divider, Radio } from 'antd';
import { getMovie, getTimeSchedulesPerCinemaAndMovie, getSeatsByScheduleId, getCinemaByCinemaId } from '../apis/cinema'
import { AddMovie } from '../reducers/MovieSlice'
import { useDispatch, useSelector } from "react-redux"
import { selectMovieById } from '../reducers/MovieSlice'
import FoodPackages from './FoodPackages';
import SeatList from './SeatList';
import {Link} from 'react-router-dom';

function MovieView() {
    const movieId = window.location.pathname.replace('/movies/', '');
    const cinemaId = window.location.search.split("=")[1];
    const [cinema, setCinema] = useState({}); 
    const [timeSlot, setTimeSlot] = useState("default"); 
    const [schedId, setSchedId] = useState(0);
    const [day, setDay] = useState(); 
    const [totalPrice, setTotalPrice] = useState();

    function onChange(date, dateString) {
        console.log("date: ", setDay(dateString));
    }

    function onChangeTimeSlot(e) {
        setSchedId(e.target.indexkey);
        setTimeSlot(e.target.value);
    }

    function grandTotalPrice (totalPrice){
        setTotalPrice(totalPrice);
    }

    const seatId = 1;
    const [timeSchedules, setTimeSchedules] = useState();
    const [seats, setSeats] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        getMovie(movieId).then((response) => {
            dispatch(AddMovie(response.data));
        });
        getTimeSchedulesPerCinemaAndMovie(cinemaId,movieId).then((response) => {
            setTimeSchedules(response.data);
        });

        getSeatsByScheduleId(seatId).then((response) => {
            setSeats(response.data);
        });

        getCinemaByCinemaId(cinemaId).then((response) => {
            setCinema(response.data)
        });
    }, [cinemaId, movieId, seatId, dispatch])

    const movie = useSelector((state) => selectMovieById(state, movieId));

    const crypto = require("crypto");
    const transactionId = crypto.randomBytes(4).toString("hex").toUpperCase();
    
    if (movie && timeSchedules && seats) {

        const summaryDetails = {
            movie: movie.movieTitle,
            cinema: cinema.name,
            date: day,
            time: timeSlot,
            seats: 3,
            price: movie.price,
            foodPrice: 200,
            totalPrice: totalPrice,
            transactionId: transactionId,
            scheduleId: schedId
        }

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
                        <Radio.Group onChange={onChangeTimeSlot} >
                            {
                                timeSchedules.map((sched) => (
                                    <Radio.Button key={sched.scheduleId} indexkey={sched.scheduleId} value={`${sched.timeStart} - ${sched.timeEnd}`} >{sched.timeStart} - {sched.timeEnd}</Radio.Button>
                                ))
                            }
                        </Radio.Group>
                    </div>
                    <div className="seatList">
                        <SeatList></SeatList>
                    </div>
                </div>
                <FoodPackages grandTotalPrice={grandTotalPrice} moviePrice={movie.price}></FoodPackages>
                <button className="button-checkout" >
                        <Link className="link"
                            to={{
                                pathname: "/checkout",
                                state: summaryDetails
                            }}>Checkout</Link></button>
            </div >
        );
    }
    return (
        <div>Loading... Movie maybe not be available.</div>
    )

}

export default MovieView;