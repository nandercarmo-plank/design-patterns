import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class MoveDownCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Moving down");
		this.gameContext.setPlayerPosition(0, -1);
	}
}