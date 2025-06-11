import {
  GAME_BOARD_NUM_ROWS,
  GAME_BOARD_ROW_LENGTH,
  I_PIECE,
  J_PIECE,
  L_PIECE,
  O_PIECE,
  S_PIECE,
  T_PIECE,
  Z_PIECE,
} from '../constants/constants';
import { GamePiece, GameBoard } from '@/types/types';

/**
 * Randomly generates a new piece to be placed into the game.
 * @returns A new random game piece, represented by a 2D array.
 * A 1 denotes a filled square of the piece, and 0 is an empty square.
 */
export function generateRandomPiece(): GamePiece {
  const pieceChoices = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];
  const randomPieceChoice = pieceChoices[Math.floor(Math.random() * 7)];

  let randomPiece: GamePiece = [];
  switch (randomPieceChoice) {
    case 'O':
      randomPiece = O_PIECE;
      break;
    case 'I':
      randomPiece = I_PIECE;
      break;
    case 'S':
      randomPiece = S_PIECE;
      break;
    case 'Z':
      randomPiece = Z_PIECE;
      break;
    case 'L':
      randomPiece = L_PIECE;
      break;
    case 'J':
      randomPiece = J_PIECE;
      break;
    case 'T':
      randomPiece = T_PIECE;
      break;
  }

  return randomPiece;
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
    row.forEach((square) => {
      // Update game state here
    });
  });

  return gameBoard;
}
