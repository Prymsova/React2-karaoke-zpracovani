import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Player from './components/Player';
import Lyrics from './components/Lyrics';
import lines from './lyrics-lines.js';

const App = () => {

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const handleClick = () => {
    setCurrentLineIndex(currentLineIndex + 1);
  }

  return (
    <div className="container">
      <Player src="fools-garden-lemon-tree.mp3" />
      <Lyrics lines={ lines } currentLineIndex={currentLineIndex}/>
      <button onClick={handleClick}>přepni řádek</button>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
