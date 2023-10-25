import { Decorator } from "../interfaces/Decorator";
import { ILogger } from "../interfaces/ILogger";

export class LevelDecorator extends Decorator {
	
	private level: "INFO"	| "ERROR";

	constructor(logger: ILogger, level: "INFO"	| "ERROR") {
		super(logger);
		this.level = level;
	}
	
	log(message: string): void {
		const log = this.level === "INFO" ? "\x1b[36mINFO\x1b[0m" : "\x1b[31mERROR\x1b[0m";
		this.logger.log(`[${log}] ${message}`);
	}
}