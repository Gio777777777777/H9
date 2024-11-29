import React, { useRef, useState } from "react";
import "./styles/VideoPlayer.css"; 

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [speed, setSpeed] = useState(1); 

   
    const handlePlay = () => {
        videoRef.current.play();
    };

 
    const handlePause = () => {
        videoRef.current.pause();
    };

 
    const changeSpeed = (newSpeed) => {
        if (videoRef.current) {
            videoRef.current.playbackRate = newSpeed;
            setSpeed(newSpeed); 
        }
    };

    return (
        <div className="video-player">
            <video ref={videoRef} width="600" controls>
                <source src={src} type="video/mp4" />
                <p>თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ფორმატს.</p>
            </video>

            <div className="video-controls">
               
                <button onClick={handlePlay}>Start</button>
                <button onClick={handlePause}>Pause</button>

              
                <div>
                    <label htmlFor="speed">Speed: {speed}x</label>
                    <input
                        id="speed"
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={speed}
                        onChange={(e) => changeSpeed(parseFloat(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
