import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({movieInfo, getActors}) => (
    <article className='movies'>
        {movieInfo.map((movie, index) => (
            <div className='card' key={index}>
                <h2>{movie.movieTitle}</h2>
                <p>{movie.movieDescription}</p>
                <button onClick={getActors} name={movie.id}>Principais Atores</button>
                {!!movie.budget && <span>Nota: {movie.budget}</span>}
            </div>
        ))}
    </article>
)

Movies.propTypes = {
    movieInfo: PropTypes.array
}

export default Movies