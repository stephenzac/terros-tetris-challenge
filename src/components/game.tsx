'use client';

import { createGameBoard, updateGameBoard } from '@/utils/game';
import { CurrentPiece, GameBoard } from '@/types/types';
import { useEffect, useRef, useState } from 'react';

export default function Game() {
  const [gameBoard, setGameBoard] = useState<GameBoard>(createGameBoard());
  const [currentPiece, setCurrentPiece] = useState<CurrentPiece>([]);

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
        break;
      case 'ArrowDown':
        break;
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
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
