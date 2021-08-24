import React from 'react';
import {Card, Button } from 'antd';
import { useSelector } from 'react-redux';
import { selectMovieById } from '../reducers/MovieSlice';

function MovieCard(props) {
    const id = props.movieId;
    const movie = useSelector(state => selectMovieById(state, id));
    const {Meta} = Card;
    return (
        <div>
            <Card hoverable
                style={
                    {width: 250}
                }
                cover={
                    <img
                alt="example"
                src="https://pbs.twimg.com/media/E4LSNucVEAY-lI2.jpg"/>
            }>
                <Meta title={movie.movieTitle} description="2 HR 30 MINS"/>
                <p>{movie.rating}</p>
                <Button type="primary">Primary Button</Button>
            </Card>
        </div>
    );
}

export default MovieCard;
