import React from 'react';
import {Col, Row} from 'antd';
import MovieCard from './MovieCard';

function MovieList() {
    const span = 5;
    return (
        <div className="movieList">
            <Row gutter={16}>
                <Col span={span} onClick={()=> window.open("movieDetails")}>
                    <MovieCard/>
                </Col>
                <Col span={span}>
                    <MovieCard/>
                </Col>
                <Col span={span}>
                    <MovieCard/>
                </Col>
                <Col span={span}>
                    <MovieCard/>
                </Col>
            </Row>
        </div>
    );
}

export default MovieList;
