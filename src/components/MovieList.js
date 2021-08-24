import React, { useEffect, useState } from 'react';
import {Col, Row} from 'antd';
import MovieCard from './MovieCard';
import { selectMovieIds } from '../reducers/MovieSlice';
import { useSelector } from 'react-redux';
import { getMoviesByCinemaId } from "../apis/cinema";
import { useDispatch } from 'react-redux';
import { AddMovies } from '../reducers/MovieSlice';
import HomeSearch from "./HomeSearch";

function MovieList(props) {
    const span = 5;
    const movieIds = useSelector(selectMovieIds);
    
    const dispatch = useDispatch();

    const [cinemaId, setCinemaId] = useState(0);
    const [cinemaName, setCinemaName] =useState('');

    useEffect(() => {
        getMoviesByCinemaId(cinemaId).then((response) => {
            dispatch(AddMovies(response.data))
        })
    })

    function updateCinemaName(cinemaName){
        setCinemaName(cinemaName);
        if (cinemaName === "SM North - Cinema 1"){
            setCinemaId(parseInt(1));
        }
        else if (cinemaName === "SM North - Cinema 2"){
            setCinemaId(parseInt(33));
        }
    }
    console.log("Name:"+cinemaName);
    console.log("MovieList: "+cinemaId);
    return (
        <div>
            <div className='searchBar'>
            <HomeSearch updateCinemaName={updateCinemaName}/>   
            </div>
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
        </div>
    );
}

export default MovieList;
