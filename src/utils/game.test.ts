import {
  GAME_BOARD_NUM_ROWS,
  GAME_BOARD_ROW_LENGTH,
} from '../constants/constants';
import { createGameBoard, generateRandomPiece } from './game';

/**
 * Test the logic of the game state functions.
 */
describe('test game functions', () => {
  test('game board creation', () => {
    const gameBoard = createGameBoard();

    // Check correct game board size
    expect(gameBoard.length).toBe(GAME_BOARD_NUM_ROWS);
    expect(gameBoard[0].length).toBe(GAME_BOARD_ROW_LENGTH);

    // Check correct game board value initialization
    gameBoard.forEach((row) => {
      expect(row).toEqual(Array(GAME_BOARD_ROW_LENGTH).fill(0));
    });
  });

  test('random piece creation', () => {
    const randomPiece = generateRandomPiece();

    // Even with randomness, every possible piece should fit these size constraints
    expect(randomPiece.length).toBeGreaterThan(0);
    expect(randomPiece.length).toBeLessThan(4);
  });

  test('game tick logic', () => {
    const gameBoard = createGameBoard();
    const randomPiece = generateRandomPiece();
  });
});
