import { ILogger } from "./ILogger";

export abstract class Decorator implements ILogger {
	
	protected logger: ILogger;

	constructor(logger: ILogger) {
		this.logger = logger;
	}
	
	abstract log(message: string): void;
}