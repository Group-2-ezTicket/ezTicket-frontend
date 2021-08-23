import React from 'react';
import '../styles/MovieDetails.css'
import MovieCard from './MovieCard';

function MovieView() {
    const span = 5;
    return (
        <div>
            <table id="movie-details">
                <tr>
                    <td id="movie-poster-table"><img id="movie-poster" src="https://pbs.twimg.com/media/E4LSNucVEAY-lI2.jpg" /></td>
                    <td id="movie-description">
                        <b id="movie-pg">PG-13</b>
                        <h1 id="movie-title">Venom: Let There Be Carnage</h1>
                        <b id="movie-duration">2 HR 30 MINS</b>
                        <p id="movie-synopsis">Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default MovieView;
