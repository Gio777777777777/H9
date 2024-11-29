import React from "react";
import Timer from "./components/Timer";
import ZoomImage from "./components/ZoomImage";
import VideoPlayer from "./components/VideoPlayer";
import "./style/App.css";
import "./components/styles/VideoPlayer.css";



const App = () => {
  return (
    <div>
      <h1>React Components Showcase</h1>
      <section>
        <h2>Timer</h2>
        <Timer />
      </section>

      <section>
        <h2>Zoom Image</h2>

        <ZoomImage
          src="https://i.i-sgcm.com/new_cars/cars/12394/12394_m.jpg"
          alt="Zoomable Car"
        />
      </section>

      <section>
        <h2>Video Player</h2>
        <VideoPlayer src="https://www.shutterstock.com/shutterstock/videos/3505331407/preview/stock-footage-civilian-aircraft-flying-over-the-sky-at-sunset.webm" />
      </section>
    </div>
  );
};

export default App;
