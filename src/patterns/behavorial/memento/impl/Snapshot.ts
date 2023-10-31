import { Memento, TicTacToeEnum } from "../interfaces/Memento";

export class Snapshot implements Memento {
	private table: TicTacToeEnum[][];
	private lastPlay: Date;

	constructor(table: TicTacToeEnum[][], lastPlay: Date) {
		this.table = table;
		this.lastPlay = lastPlay;
	}

	getTable(): TicTacToeEnum[][] {
		return this.table;
	}

	getLastPlay(): Date {
		return this.lastPlay;
	}
}