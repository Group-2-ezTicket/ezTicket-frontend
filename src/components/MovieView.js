import React, { useEffect,useState } from 'react'
import '../styles/MovieDetails.css'
import { Menu, Dropdown, Button, message, Space, Rate, DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getMovie, getTimeSchedulesPerCinemaAndMovie } from '../apis/cinema'
import { AddMovie } from '../reducers/MovieSlice'
import { useDispatch, useSelector } from "react-redux"
import { selectMovieById } from '../reducers/MovieSlice'
import FoodPackages from './FoodPackages';

function MovieView(props) {
    const movieId = window.location.pathname.replace('/movies/', '')
    // const movieId = 1;
    const cinemaId = window.location.search.split("=")[1]
    console.log("cinemaId:", cinemaId);

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                SM North - Cinema 1
            </Menu.Item>
            <Menu.Item key="2">
                SM North - Cinema 2
            </Menu.Item>
            <Menu.Item key="3">
                SM North - Cinema 3
            </Menu.Item>
        </Menu>
    );

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    //const cinemaId = 1;
    const [timeSchedules, setTimeSchedules] = useState();

    useEffect(() => {
        getMovie(movieId).then((response) => {
            console.log("response.data:", response.data);
            dispatch(AddMovie(response.data));
        });
        getTimeSchedulesPerCinemaAndMovie(cinemaId,movieId).then((response) => {
            setTimeSchedules(response.data);
        });
    })

    console.log("timeShed",timeSchedules);

    const movie = useSelector((state) => selectMovieById(state, movieId));
    const dispatch = useDispatch()

    if (movie && timeSchedules) {

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
                        <tr>
                            <td id="movie-theatre-dropdown" colSpan="2">
                                <hr />
                                <Dropdown overlay={menu} className="movie-theatre-dropdown-button">
                                    <Button>
                                        Select Theatre <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="seat-and-schedule">
                    <h1>Seat and Schedule</h1>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                    </Space>
                    <div className="time-schedules">
                        {
                            timeSchedules.map((sched) => (
                                <Button>{sched.timeStart} - {sched.timeEnd}</Button>
                            ))
                        }
                    </div>

                </div>
                <FoodPackages></FoodPackages>
            </div >
        );
    }
    return (
        <div>Loading...</div>
    )

}

export default MovieView;
