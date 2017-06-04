import React from 'react'
import Search from './search';
import Movies from './movies';
import Actors from './actors';
import PropTypes from 'prop-types';

const AppContent = ({movieTitle, movieDescription, budget, actorsArr}) => (
    <main className='container'>
        <Search />
        <section className='content'>
            <Movies
                movieTitle={movieTitle}
                movieDescription={movieDescription}
                budget={budget} />
            <Actors actorsArr={actorsArr}/>
        </section>
    </main>
)

AppContent.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    movieDescription: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    actorsArr: PropTypes.array.isRequired
}

export default AppContent