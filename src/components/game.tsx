'use client';

import {
  createGameBoard,
  generateRandomPiece,
  updateGameBoard,
} from '@/utils/game';
import { GamePiece, GameBoard } from '@/types/types';
import { useEffect, useRef, useState } from 'react';

export default function Game() {
  const [gameBoard, setGameBoard] = useState<GameBoard>(createGameBoard());
  const [currentPiece, setCurrentPiece] = useState<GamePiece>(
    generateRandomPiece()
  );

  const boardRef = useRef<HTMLDivElement>(null);

  // Focus the game board by default
  useEffect(() => {
    boardRef.current?.focus();
  }, []);

  // Apply a game tick to the game board every 1 second.
  useEffect(() => {
    const interval = setInterval(() => {
      const newGameBoard = updateGameBoard(gameBoard);
      setGameBoard(newGameBoard);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameBoard]);

  // Handle arrow key game controls
  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();

    switch (event.key) {
      case 'ArrowUp':
        // Flip current piece
        break;
      case 'ArrowDown':
        // Apply a game tick upon arrow down
        const newGameBoard = updateGameBoard(gameBoard);
        setGameBoard(newGameBoard);
        break;
      case 'ArrowLeft':
        // Move piece left by 1 space
        break;
      case 'ArrowRight':
        // Move piece right by 1 space
        break;
    }
  };

  return (
    <div
      className='flex flex-col gap-0.5'
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={boardRef}
    >
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className='flex flex-row gap-0.5'>
          {row.map((square, squareIndex) => (
            <div
              key={squareIndex}
              className={`w-7 h-7 ${
                square === 0 ? 'bg-gray-400' : 'bg-green-500'
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
