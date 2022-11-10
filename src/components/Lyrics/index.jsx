import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const Lyrics = ({ lines, currentLineIndex }) => {
    const currentLineRef = useRef();
    //!!! nedávat do {} tedy chybně const {currentLineRef} = useRef(); !!!

    useEffect(() => {
        //console.log(currentLineRef)

        // jelikož při zahájení písničky nechceme mít označený žádný řádek, tak initial index -1, ale aby to tady neházelo chybu, tak nutné dát podmínku že v takovém případě se nemá nic stát (ukončí se podmínka tím returnem)
        if(currentLineIndex === -1) {
            return;
        } else {
            currentLineRef.current.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth',
            })
        }
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