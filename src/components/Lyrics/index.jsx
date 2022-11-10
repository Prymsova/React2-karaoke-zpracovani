import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const Lyrics = ({ lines, currentLineIndex }) => {
    const currentLineRef = useRef();
    //!!! nedávat do {} tedy chybně const {currentLineRef} = useRef(); !!!

    useEffect(() => {
        //console.log(currentLineRef)
        currentLineRef.current.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        })
    }, [currentLineIndex]);
    
    return (
        <div className="lyrics">
            {lines.map((line, index) => 
                <p key={index}
                    className={currentLineIndex === index ? "current-line" : null}
                    ref={currentLineIndex === index ? currentLineRef : null}
                >{line.text}
                </p>
            )}
        </div>
    )
};

export default Lyrics;