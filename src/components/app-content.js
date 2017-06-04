import React from 'react'
import Search from './search';
import Movies from './movies';
import Actors from './actors';
import PropTypes from 'prop-types';

const AppContent = ({movieInfo, actorsArr, getValue, getActors, getMovies}) => (
    <main className='container'>
        <Search getValue={getValue}/>
        <section className='content'>
            {!!movieInfo && <Movies
                movieInfo={movieInfo}
                getActors={getActors}/>}
            {!!actorsArr && <Actors
                actorsArr={actorsArr}
                getMovies={getMovies}/>}
        </section>
    </main>
)

AppContent.propTypes = {
    movieInfo: PropTypes.array,
    actorsArr: PropTypes.array.isRequired,
    getValue: PropTypes.func.isRequired,
    getActors: PropTypes.func.isRequired,
    getMovies: PropTypes.func.isRequired
}

export default AppContent