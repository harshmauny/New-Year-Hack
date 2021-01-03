import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Video from "./components/Video.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay muted loop id="myVideo">
          <source src="./assets/final.mp4" type="video/mp4" />
        </video>
        <div class="angle1">
          <div class="horizontal"></div>
          <div class="vertical"></div>
        </div>
        <div class="angle2">
          <div class="vertical"></div>
          <div class="horizontal"></div>
        </div>
        <div class="record">
          <span class="dot"></span><span>REC</span>
        </div>
        <div class="angle3">
          <div class="horizontal"></div>
          <div class="vertical"></div>
        </div>
        <div class="angle4">
          <div class="vertical"></div>
          <div class="horizontal"></div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/video" exact component={Video} />
      </div>
    </Router>
  );
}

export default App;