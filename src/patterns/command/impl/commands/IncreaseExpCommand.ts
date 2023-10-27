import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class IncreaseExpCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Increasing experience");
		this.gameContext.addExperience(10);
	}
}