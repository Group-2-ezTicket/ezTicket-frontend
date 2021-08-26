import React from 'react';
import { Card, Button } from 'antd';
import { useSelector } from 'react-redux';
import { selectMovieById } from '../reducers/MovieSlice';
import { StarOutlined } from '@ant-design/icons';

function MovieCard(props) {
    const id = props.movieId;
    const cinemaId = props.cinemaId;
    const movie = useSelector(state => selectMovieById(state, id));


    const { Meta } = Card;
    return (
        <div>
            <Card hoverable
                style={
                    { width: 250 }
                }
                cover={
                    <img
                        alt={movie.item.movieTitle}
                        src={`../images/poster-${id}.jpg`} />
                }>
                <Meta title={movie.item.movieTitle} description={movie.item.genre} />
                <p>{
                    [...Array(movie.item.rating)].map((elementInArray, index) => (

                        <StarOutlined key={index} />
                    ))
                }
                </p>
                <p>PHP {movie.item.price}</p>
                <Button type="primary" href={`movies/${id}?cinemaId=${cinemaId}`} >Reserve Seat</Button>
            </Card>
        </div>
    );
}

export default MovieCard;
