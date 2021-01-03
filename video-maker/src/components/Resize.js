import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Resize extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./resizejs.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="video">
                <div className="text">
                    <h1>Resize Images</h1>
                    <div>
                        <p>Instructions: </p>
                        <p>- Upload images to be resized below.</p>
                        <p>- Files will be automatically downloaded.</p>
                    </div>
                    <div className="upload">
                        <input id="resize" type="file" multiple />
                    </div>
                    <div className="" style={{ marginTop: '10px' }}>
                        <p>Done with Resizing your Images? <Link to="/video"><span>Lets Rewind!</span></Link></p>
                    </div>
                </div>
            </div>
        )
    }
}