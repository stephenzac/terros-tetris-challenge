import {
  GAME_BOARD_NUM_ROWS,
  GAME_BOARD_ROW_LENGTH,
} from '@/constants/constants';
import { GameBoard } from '@/types/types';

/**
 * Randomly generates a new piece to be placed into the game.
 */
export function generateRandomPiece() {
  const pieces = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];
  const randomPieceChoice = pieces[Math.floor(Math.random() * 7)];

  let randomPiece = [];
  switch (randomPieceChoice) {
    case 'O':
      break;
    case 'I':
      break;
    case 'S':
      break;
    case 'Z':
      break;
    case 'L':
      break;
    case 'J':
      break;
    case 'T':
      break;
  }
}

/**
 * Create a starting state of an empty 20x10 game board.
 * @returns - A 20-row 2D array of length 10 arrays initialized with zeroes.
 */
export function createGameBoard(): GameBoard {
  return Array.from({ length: GAME_BOARD_NUM_ROWS }, () =>
    Array(GAME_BOARD_ROW_LENGTH).fill(0)
  );
}

/**
 * Create a new copy of the game board, update the game state, and return the new state.
 * @param gameBoard - The "current" state of the game before applying a game tick.
 * @returns The updated game board state (a 2D array of numbers).
 */
export function updateGameBoard([...gameBoard]: GameBoard): GameBoard {
  gameBoard.forEach((row) => {
    row.forEach((square) => {});
  });

  return gameBoard;
}
