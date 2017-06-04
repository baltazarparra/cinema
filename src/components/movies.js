import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({movieTitle, movieDescription, budget}) => (
    <article className='movies'>
        <div className='card'>
            <h2>{movieTitle}</h2>
            <p>{movieDescription}</p>
            <span>{budget}</span>
        </div>
    </article>
)

Movies.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    movieDescription: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired
}

export default Movies