import { GameContext } from "../impl/GameContext";

export abstract class Command {

	protected gameContext: GameContext;

	constructor(gameContext: GameContext) {
		this.gameContext = gameContext;
	}

	abstract execute(): void;
}