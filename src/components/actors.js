import React from 'react';
import PropTypes from 'prop-types';

const Actors = ({actorsArr}) => (
    <article className='actors'>
    <ul>
        {actorsArr.map((actor, index) => (
            <li key={index}>
                <img src={actor.src} alt={actor.name} />
                <p>{actor.name}</p>
            </li>
        ))}
    </ul>
    </article>
)

Actors.propTypes = {
    actorsArr: PropTypes.array
}

export default Actors