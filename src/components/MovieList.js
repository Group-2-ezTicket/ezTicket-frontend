import React, { useEffect } from 'react';
import {Col, Row} from 'antd';
import MovieCard from './MovieCard';
import { selectMovieIds } from '../reducers/MovieSlice';
import { useSelector } from 'react-redux';
import { getMoviesByCinemaId } from "../apis/cinema";
import { useDispatch } from 'react-redux';
import { AddCinemas } from '../reducers/MovieSlice';

function MovieList(props) {
    const span = 5;
    const movieIds = useSelector(selectMovieIds);
   
    const dispatch = useDispatch();

    if(props.cinemaName) {
        console.log(props.cinemaName);
    }

    useEffect(() => {
        getMoviesByCinemaId(1).then((response) => {
            dispatch(AddCinemas(response.data))
        })
    })

    return (
        <div className="movieList">
            <Row gutter={16}>
                {
                    movieIds.map((id) => (
                        <Col span={span} key={id}  >
                            <MovieCard movieId={id} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default MovieList;
