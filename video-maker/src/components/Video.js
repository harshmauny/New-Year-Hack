import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Video extends Component {
    render() {
        return (
            <div className="video">
                <div className="text">
                    <h1>Upload Images</h1>
                    <div>
                    <p>Instructions: </p>
                    <p>- Upload you favourite photos (make sure they are of specified dimensions) of year 2020</p>
                    <p>- Also, you can use our editor to fix dimensions</p>
                    <p>- Once all images are uploaded, press the "generate your video" button and let the magic begin!</p>
                    </div>
                    <div className="upload">
                        <form action="https://lets-rewind-api.herokuapp.com/convert" method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <input type="file" name="file" required multiple />
                            </div>
                            <div className="form-group">
                                <button class="btn btn-block btn-danger">
                                    Generate your video
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="" style={{marginTop: '10px'}}>
                        <p>Getting error on upload? <Link to="/resize"><span>Resize Image</span></Link></p>
                    </div>
                </div>
            </div>
        )
    }
}