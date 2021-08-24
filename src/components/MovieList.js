import React, { useEffect } from 'react';
import {Col, Row} from 'antd';
import MovieCard from './MovieCard';
import { selectMovieIds } from '../reducers/MovieSlice';
import { useSelector } from 'react-redux';
import { getMoviesByCinemaId } from "../apis/cinema";
import { useDispatch } from 'react-redux';
import { AddMovies } from '../reducers/MovieSlice';

function MovieList(props) {
    const span = 5;
    const movieIds = useSelector(selectMovieIds);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getMoviesByCinemaId(1).then((response) => {
            dispatch(AddMovies(response.data))
        })
    })
 
    return (
        <div className="movieList">
            <Row gutter={16}>
                {
                    movieIds.map((id) => (
                        <Col span={span} key={id} onClick={()=> window.open("movieView")} >
                            <MovieCard movieId={id} key={id}  />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default MovieList;
