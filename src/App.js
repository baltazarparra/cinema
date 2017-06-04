import React, { Component } from 'react';
import AppContent from './components/app-content';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            movieInfo: [],
            actorsArr: []
        }
    }
    getValue (e) {
        var $input = e.target;
        var timeout = null;
        $input.onkeyup = function() {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                const value = $input.value;
                const movies = fetch(`https://api.themoviedb.org/3/search/multi?api_key=c6fd03a8cc77bd746f6a722cbd929d9e&language=pt-BR&query=${value}&page=1&include_adult=true`);
                console.log(movies.results);
                movies
                    .then(movie => movie.json())
                    .then(movie => {
                        this.setState({
                            actorsArr: [],
                            movieInfo:
                            movie.results.map((item) => {
                                return {
                                    movieTitle: item.title,
                                    movieDescription: item.overview,
                                    budget: item.vote_average,
                                    id: item.id
                                }
                            })
                        })
                    })
                    .catch(err => console.error(err));
            }.bind(this), 600);
        }.bind(this)
    }
    getActors (e) {
        const movieId = e.target.name;
        const credit = fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c6fd03a8cc77bd746f6a722cbd929d9e&append_to_response=credits`);
        credit
            .then(credit => credit.json())
            .then(credit => {
                const actors = [];
                credit.credits.cast.filter((item) => {
                    if (item.order < 6) {
                        return actors.push(item)
                    } else {
                        return null;
                    }
                })
                console.log(actors)
                this.setState({
                    actorsArr:
                    actors.map((actor) => {
                        return {
                            src: `https://image.tmdb.org/t/p/w640/${actor.profile_path}`,
                            name: actor.name,
                            id: actor.id
                        }
                    })
                })
            }).catch(err => console.error(err));
    }
    getMovies (e) {
        const actorId = e.target.name;
        const movies = fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=c6fd03a8cc77bd746f6a722cbd929d9e&language=pt-BR`);
        movies
            .then(movie => movie.json())
            .then(movie => {
                this.setState({
                    actorsArr: [],
                    movieInfo:
                    movie.cast.map((item) => {
                        return {
                            movieTitle: item.title,
                            movieDescription: item.overview,
                            budget: item.vote_average,
                            id: item.id
                        }
                    })
                })
            })
            .catch(err => console.error(err));
    }
    render() {
        return <AppContent
        {...this.state}
        getValue={(e) => this.getValue(e)}
        getActors={(e) => this.getActors(e)}
        getMovies={(e) => this.getMovies(e)}/>
    }
}

export default App;
