import React from 'react';

function Game(){
  return (
    <>
    <div className="game-container">
        <div className="game-message"><p></p>
            <div className="lower"><a className="keep-playing-button">Keep going</a>
                <a className="retry-button">Try again</a>
            </div>
        </div>
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
            </div>
        </div>
        <div className="tile-container">
            <div className="tile tile-2 tile-position-1-4 tile-new">
                <div className="tile-inner">2</div>
            </div>
            <div className="tile tile-2 tile-position-4-2 tile-new">
                <div className="tile-inner">2</div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Game;