import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Player from './components/Player';
import Lyrics from './components/Lyrics';
import lines from './lyrics-lines.js';

const App = () => {
  const srcSong = "fools-garden-lemon-tree.mp3";

  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  
  /* toto už není potřeba, bylo pro ověření funkčnosti změny označení aktuálního řádku při změně stavu - indexu aktuálního řádku
  const handleClick = () => { setCurrentLineIndex(currentLineIndex + 1); }; */

  const handleTimeUpdate = (currentTime) => {
    console.log(currentTime);
    const currentIndex = lines.findLastIndex((line) => line.time < currentTime);
    console.log(currentIndex);

    if(currentIndex !== currentLineIndex) {
      setCurrentLineIndex(currentIndex);
    }
  };

  return (
    <div className="container">
      <Player src={srcSong} onTimeUpdate={handleTimeUpdate}/>
      <Lyrics lines={ lines } currentLineIndex={currentLineIndex}/>

      {/* pro ověření, že funguje změna označení aktuálního řádku textu písně při změně stavu s aktuálním indexem řádku
      <button onClick={handleClick}>přepni řádek</button> */}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
