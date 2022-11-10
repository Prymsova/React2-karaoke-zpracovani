import React, { useRef, useState, useEffect } from 'react';
import './style.css'; 

const Player = ({ src }) => {
    const [playing, setPlaying] = useState(false);
    const playingRef = useRef();

    useEffect(() => {
        if(playing) {
            playingRef.current.play();
        } else {
            playingRef.current.pause();
        }        
    }, [playing]);
   
    const handlePlay = () => {
        setPlaying(!playing);
    };

    return (
        <div className="container">
            <h1>Fools Garden: Lemon Tree</h1>
            <audio ref={playingRef} src={src}></audio>
            <div className="player-controls">
                <button className={playing ? "play-button pause" : "play-button play"} onClick={handlePlay}></button>
            </div>
        </div>
    )
};

export default Player;