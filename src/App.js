import React, { Component } from 'react';
import AppContent from './components/app-content';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            movieTitle: 'Movie Title II',
            movieDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            budget: 'R$1.320.000',
            actorsArr: [
                {
                    src: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTE5NTU2MzE1OTk1Mjc2ODEx/ryan-gosling-212045-1-402.jpg',
                    name: 'Ryan Gosling'
                }, {
                    src: 'http://i.huffpost.com/gen/943442/images/o-RYAN-GOSLING-KNITS-facebook.jpg',
                    name: 'Ryan Gosling II'
                }, {
                    src: 'http://p.fod4.com/p/channels/legacy/profile/1241308/d31e526fc30294df3aa2ea7c4c8bc231.jpg',
                    name: 'Ryan Gosling III'
                }
            ]
        }
    }
    render() {
        return <AppContent {...this.state}/>
    }
}

export default App;
