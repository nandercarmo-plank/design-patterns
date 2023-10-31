import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class MoveBackwardCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Moving backward");
		this.gameContext.setPlayerPosition(-1, 0);
	}
}