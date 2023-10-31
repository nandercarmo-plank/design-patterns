import { Memento } from "../interfaces/Memento";

export class GameHistory {
	private states: Memento[] = [];

	do(state: Memento) {
		this.states.push(state);
	}

	undo(): Memento {
		const state = this.states.pop();
		if (!state) {
			throw new Error("There is no state to undo");
		}
		return state;
	}
}