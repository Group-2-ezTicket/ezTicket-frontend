import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import MovieCard from './MovieCard';
import {selectMovieIds } from '../reducers/MovieSlice';
import { useSelector } from 'react-redux';
import { getMoviesByCinemaId } from "../apis/cinema";
import { useDispatch } from 'react-redux';
import { AddMovies } from '../reducers/MovieSlice';
import HomeSearch from "./HomeSearch";
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/MovieList.css';

function MovieList(props) {
    const span = 5;
    const movieIds = useSelector(selectMovieIds);

    const dispatch = useDispatch();

    const [cinemaId, setCinemaId] = useState(1);
    const [cinemaName, setCinemaName] = useState('SM South Mall - Cinema 1');

    useEffect(() => {
        getMoviesByCinemaId(cinemaId).then((response) => {
            dispatch(AddMovies(response.data))
        })
    }, [cinemaId])

    function updateCinemaName(cinemaName){
        setCinemaName(cinemaName);
        if (cinemaName === "SM South Mall - Cinema 1"){
            setCinemaId(parseInt(1));
        }
        else if (cinemaName === "SM South Mall - Cinema 2"){
            setCinemaId(parseInt(2));
        }
        else if (cinemaName === "SM North Edsa - Cinema 1"){
            setCinemaId(parseInt(3));
        }
        else if (cinemaName === "SM North Edaa - Cinema 2"){
            setCinemaId(parseInt(4));
        }
        
    }
    return (
        <Router>
        <div>
            <div className='searchBar'>
            <HomeSearch updateCinemaName={updateCinemaName}/>   
            </div>
            <div>
                <h2 className='cinemaName'>{cinemaName}</h2>
            </div>
            <div className="movieList">
                <Row gutter={16}>
                    {
                        movieIds.map((id) => (
                            <Col span={span} key={id} onClick={()=> window.open("movieView")} >
                                <MovieCard movieId={id} key={id} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
            </div>
        </Router>
    );
}

export default MovieList;
