import './App.css';

function App() {
  return (
    <div className="App">
      <div className="text">
        <h1>Lets Rewind</h1>
      </div>
      <video autoPlay muted loop id="myVideo">
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
