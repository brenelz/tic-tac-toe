/* eslint-disable react/prop-types */
import { checkHasWon, range } from "../utils"
import React from 'react';
import Box from "./Box";
import { useState } from "react";

export default function TicTacToe({ nextGame }) {
    const [whichPlayersTurn, setWhichPlayersTurn] = useState('X');
    // eslint-disable-next-line no-unused-vars
    const [board, setBoard] = useState(range(3).map(_ => range(3).map(_ => '')));
    const [numPicksMade, setNumPicksMade] = useState(0);
    const [hasWon, setHasWon] = useState(false);

    const gameOver = numPicksMade === 9 || hasWon;

    const makePick = (x, y) => {
        const newBoard = [...board];
        newBoard[x][y] = whichPlayersTurn;
        setBoard(newBoard);

        const hasWon = checkHasWon(whichPlayersTurn, board);
        setHasWon(hasWon);

        if (!hasWon) {
            setWhichPlayersTurn(whichPlayersTurn === 'X' ? 'Y' : 'X');
            setNumPicksMade(numPicksMade + 1);
        }
    }

    return (
        <>
            {board.map((row, x) => (
                <div key={x} style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} >
                    {row.map((value, y) => (
                        <Box key={y} value={value} isButton={!hasWon && board[x][y] === ''} onClick={() => makePick(x, y)} />
                    ))}
                </div >
            ))}
            {gameOver && <div style={{ textAlign: 'center' }}>
                <p>
                    Game Over.{' '}
                    {hasWon ? `Player ${whichPlayersTurn} won!` : `No player has won`}
                </p>
                <p><button onClick={nextGame}>Play Again</button></p>
            </div>}
        </>
    )
}