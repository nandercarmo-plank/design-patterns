import { Command } from "../../interfaces/Command";
import { GameContext } from "../GameContext";

export class DamageCommand extends Command {
	constructor(gameContext: GameContext) {
		super(gameContext);
	}
	execute() {
		console.log("[Command] Taking damage");
		this.gameContext.takeDamage(10);
	}
}