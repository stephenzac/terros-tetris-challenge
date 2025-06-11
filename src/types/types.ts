/**
 * Types used to help model the Tetris game state.
 */

/**
 * The entire game board containing the game "pieces".
 */
export type GameBoard = Array<Array<number>>;

/**
 * The randomly selected piece that "falls" with every tick,
 * and is controlled by the player.
 */
export type GamePiece = Array<Array<number>>;
