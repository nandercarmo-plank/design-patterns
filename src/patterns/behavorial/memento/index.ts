import { IRunner, RunnerType } from "../../../types/runner";
import { Game } from "./impl/Game";
import { TicTacToeEnum } from "./interfaces/Memento";

type MementoPatternParams = {
	plays: number;
	undos: number;
};

class MementoPattern implements IRunner {

	private params: MementoPatternParams;

	constructor(params: MementoPatternParams) {
		this.params = params;
	}

	run() {

		const game = new Game();
		let marker = TicTacToeEnum.X;

		for (let i = 0; i < this.params.plays; i++) {
			game.play(marker);
			marker = marker === TicTacToeEnum.X ? TicTacToeEnum.O : TicTacToeEnum.X;
		}

		for (let i = 0; i < this.params.undos; i++) {
			game.undo();
		}

		return;
	}
}

export const MementoPatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should make the game play 2 times and undo 0 times",
			test: new MementoPattern({ plays: 2, undos: 0 }),
		},
		{ 
			name: "Should make the game play 2 times and undo 1 time",
			test: new MementoPattern({ plays: 2, undos: 1 }),
		},
		{ 
			name: "Should make the game play 3 times and undo 2 times",
			test: new MementoPattern({ plays: 3, undos: 2 }),
		},
		{ 
			name: "Should make the game play 3 times and undo 3 times",
			test: new MementoPattern({ plays: 3, undos: 3 }),
		},
	],
	pattern: "Memento",
	shouldRun: true
};
