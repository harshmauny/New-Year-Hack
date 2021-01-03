import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

var FontAwesome = require('react-fontawesome');

export default class Video extends Component {
    render() {
        return (
            <div>
                <div className="text">
                <h1>Lets Rewind</h1>
                <p>Rewind some good memories of 2020.. And welcome new year 2021 with positive vibes</p>
                <Link to="/video">
                <button class="btn btn-danger">
                    <FontAwesome
                    className='fas fa-play'
                    size='2x'
                    style={{   transform: 'rotateZ(180deg)', color: 'black', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <FontAwesome
                    className='fas fa-play'
                    size='2x'
                    style={{ transform: 'rotateZ(180deg)', color: 'black', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'  }}
                    />
                    <span style={{ marginLeft: '10px', fontSize: '2rem'}}>Rewind</span>
                </button>
                </Link>
            </div>
            </div>
        )
    }
}