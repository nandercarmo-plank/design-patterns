import { TicTacToeEnum } from "../interfaces/Memento";
import { GameHistory } from "./GameHistory";
import { TicTacToeOriginator } from "./TicTacToeOriginator";

export class Game {
	private history: GameHistory;
	private state: TicTacToeOriginator;

	constructor() {
		this.history = new GameHistory();
		this.state = new TicTacToeOriginator();
		console.log("Starting a new game: ");
		this.state.printTable();
	}

	play(marker: TicTacToeEnum) {
		this.history.do(this.state.save());

		let x = Math.floor(Math.random() * 3);
		let y = Math.floor(Math.random() * 3);

		while (this.state.getTable()[x][y] !== TicTacToeEnum.EMPTY) {
			x = Math.floor(Math.random() * 3);
			y = Math.floor(Math.random() * 3);
		}

		this.state.play(x, y, marker);
		console.log(`Player ${marker} played at ${x}, ${y}:`);
		this.state.printTable();
	}

	undo() {
		const state = this.history.undo();
		this.state.restore(state);
		console.log("Undoing last play: ", state.getLastPlay());
		this.state.printTable();
	}
}