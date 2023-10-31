import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class MoveFowardCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Moving foward");
		this.gameContext.setPlayerPosition(+1, 0);
	}
}