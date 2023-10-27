import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class MoveUpCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Moving up");
		this.gameContext.setPlayerPosition(0, +1);
	}
}