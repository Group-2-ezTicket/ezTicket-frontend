import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import MovieCard from './MovieCard';
import { selectMovieIds } from '../reducers/MovieSlice';
import { useSelector } from 'react-redux';
import { getMoviesByCinemaId } from "../apis/cinema";
import { useDispatch } from 'react-redux';
import { AddMovies } from '../reducers/MovieSlice';
import { BrowserRouter as Router } from "react-router-dom";

function MovieList(props) {
    const span = 5;
    const movieIds = useSelector(selectMovieIds);
    const cinemaId = 1;

    const dispatch = useDispatch();

    useEffect(() => {
        getMoviesByCinemaId(cinemaId).then((response) => {
            dispatch(AddMovies(response.data))
        })
    })

    return (
        <Router>
            <div className="movieList">
                <Row gutter={16}>
                    {
                        movieIds.map((id) => (
                            <Col span={span} key={id}>
                                <MovieCard movieId={id} cinemaId={cinemaId} key={id}/>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Router>
    );
}

export default MovieList;
