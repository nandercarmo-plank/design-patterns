export enum TicTacToeEnum {
	X = "X",
	O = "O",
	EMPTY = " ",
};

export interface Memento {
	getTable(): TicTacToeEnum[][];
	getLastPlay(): Date;
}