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

    expect(gameBoard.length).toBe(GAME_BOARD_NUM_ROWS);
    expect(gameBoard[0].length).toBe(GAME_BOARD_ROW_LENGTH);
  });

  test('random piece creation', () => {
    const randomPiece = generateRandomPiece();

    // Even with randomness, every piece should fit these size constraints
    expect(randomPiece.length).toBeGreaterThan(0);
    expect(randomPiece.length).toBeLessThan(4);
  });
});
