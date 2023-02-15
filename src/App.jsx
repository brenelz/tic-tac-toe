/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import TicTacToe from './components/TicTacToe';

function App() {
    const [game, setGame] = useState(0);

    function nextGame() {
        setGame(game + 1);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center', }} >
            <TicTacToe key={game} nextGame={nextGame} />
        </ div>
    )
}

export default App;