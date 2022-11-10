import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Player from './components/Player';

const App = () => {

  return (
    <Player src="fools-garden-lemon-tree.mp3" />
  );
};

{/* <div class="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <audio src="fools-garden-lemon-tree.mp3"></audio>
      <div class="player-controls">
        <button class="play-button play"></button>
      </div>
    <div class="lyrics">
      <p>I'm sittin' here in the boring room</p>
      <p>It's just another rainy Sunday afternoon</p>
      <p>I'm wasting my time I got nothin' to do</p>
      <p>I'm hangin' around I'm waitin' for you</p>
      <p>But nothing ever happens and I wonder</p>
      <p>I'm drivin' around in my car</p>
      <p>I'm drivin' too fast I'm drivin' too far</p>
      <p>I'd like to change my point of view</p>
      <p>I feel so lonely I'm waitin' for you</p>
    </div> */}


createRoot(
  document.querySelector('#app'),
).render(<App />);
