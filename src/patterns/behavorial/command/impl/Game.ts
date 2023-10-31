import { Command } from "../interfaces/Command";
import { GameContext } from "./GameContext";
import { IncreaseExpCommand } from "./commands/IncreaseExpCommand";
import { MoveBackwardCommand } from "./commands/MoveBackwardCommand";
import { MoveUpCommand } from "./commands/MoveUpCommand";
import { MoveDownCommand } from "./commands/MoveDownCommand";
import { MoveFowardCommand } from "./commands/MoveFowardCommand";
import { DamageCommand } from "./commands/DamageCommand";
import { HealingCommand } from "./commands/HealingCommand";

export enum Actions {
	MOVE_UP = "MOVE_UP",
	MOVE_DOWN = "MOVE_DOWN",
	MOVE_LEFT = "MOVE_LEFT",
	MOVE_RIGHT = "MOVE_RIGHT",
	TAKE_DAMAGE = "TAKE_DAMAGE",
	HEAL = "HEAL",
	ADD_EXP = "ADD_EXP",
}

export class Game {

	private commands: Command[] = [];
	private gameContext: GameContext;

	constructor(actions: Actions[]) {

		this.gameContext = new GameContext();

		const commands = {
			[Actions.MOVE_UP]: new MoveUpCommand(this.gameContext),
			[Actions.MOVE_DOWN]: new MoveDownCommand(this.gameContext),
			[Actions.MOVE_RIGHT]: new MoveFowardCommand(this.gameContext),
			[Actions.MOVE_LEFT]: new MoveBackwardCommand(this.gameContext),
			[Actions.TAKE_DAMAGE]: new DamageCommand(this.gameContext),
			[Actions.HEAL]: new HealingCommand(this.gameContext),
			[Actions.ADD_EXP]: new IncreaseExpCommand(this.gameContext),
		}

		actions.forEach(action => {
			this.commands.push(commands[action]);
		});
	}

	run() {
		this.commands.forEach(command => command.execute());
	}

	printContext() {
		console.log("Game context {");
		console.log(`  Player position: x = ${this.gameContext.getPlayerPosition().x} | y = ${this.gameContext.getPlayerPosition().y}`);	
		console.log(`  Player health: ${this.gameContext.getPlayerHealth()}`);
		console.log(`  Player experience: ${this.gameContext.getPlayerExperience()}`);
		console.log("}");
	}
}
