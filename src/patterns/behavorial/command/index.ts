import { IRunner, RunnerType } from "../../../types/runner";
import { Actions, Game } from "./impl/Game";

type CommandPatternParams = {
	actions: Actions[];
};

class CommandPattern implements IRunner {

	private params: CommandPatternParams;

	constructor(params: CommandPatternParams) {
		this.params = params;
	}

	run() {
		
		const game = new Game(this.params.actions);
		game.run();
		game.printContext();

		return;
	}
}

export const CommandPatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should exec a simple move up command",
			test: new CommandPattern({ actions: [Actions.MOVE_UP] }),
		},
		{ 
			name: "Should exec a simple move down command",
			test: new CommandPattern({ actions: [Actions.MOVE_DOWN] }),
		},
		{ 
			name: "Should exec a simple move left command",
			test: new CommandPattern({ actions: [Actions.MOVE_LEFT] }),
		},
		{ 
			name: "Should exec a simple move right command",
			test: new CommandPattern({ actions: [Actions.MOVE_RIGHT] }),
		},
		{ 
			name: "Should exec a simple take damage command",
			test: new CommandPattern({ actions: [Actions.TAKE_DAMAGE] }),
		},
		{ 
			name: "Should exec a simple heal command",
			test: new CommandPattern({ actions: [Actions.HEAL] }),
		},
		{ 
			name: "Should exec a simple add exp command",
			test: new CommandPattern({ actions: [Actions.ADD_EXP] }),
		},
		{ 
			name: "Should exec multiples commands",
			test: new CommandPattern({ actions: [Actions.MOVE_UP, Actions.MOVE_RIGHT, Actions.TAKE_DAMAGE, Actions.ADD_EXP] }),
		}
	],
	pattern: "Command",
	shouldRun: true
};
