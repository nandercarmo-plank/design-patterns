import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class HealingCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Healing");
		this.gameContext.healthUp(10);
	}
}