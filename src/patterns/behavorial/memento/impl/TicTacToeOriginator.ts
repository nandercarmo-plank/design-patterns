import { th } from "date-fns/locale";
import { Memento, TicTacToeEnum } from "../interfaces/Memento";
import { Snapshot } from "./Snapshot";


export class TicTacToeOriginator implements Memento {
	private table: TicTacToeEnum[][];
	private lastPlay: Date;

	constructor() {
		this.table = [
			[TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY], 
			[TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY], 
			[TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY, TicTacToeEnum.EMPTY]
		];
		this.lastPlay = new Date();
	}

	printTable() {
		console.log(`\n${this.table[0][0]} | ${this.table[0][1]} | ${this.table[0][2]}\n---------\n${this.table[1][0]} | ${this.table[1][1]} | ${this.table[1][2]}\n---------\n${this.table[2][0]} | ${this.table[2][1]} | ${this.table[2][2]}\n`);
	}

	play(x: number, y: number, player: TicTacToeEnum) {
		if (this.table[x][y] !== TicTacToeEnum.EMPTY) {
			throw new Error("This position is already taken");
		}

		this.table[x][y] = player;
		this.lastPlay = new Date();
	}

	getTable(): TicTacToeEnum[][] {
		return this.table;
	}
	
	getLastPlay(): Date {
		return this.lastPlay;
	}

	save(): Memento {
		return new Snapshot([
			[...this.table[0]], 
			[...this.table[1]], 
			[...this.table[2]]
		], this.lastPlay);
	}

	restore(memento: Memento) {
		this.table = memento.getTable();
		this.lastPlay = memento.getLastPlay();
	}
}