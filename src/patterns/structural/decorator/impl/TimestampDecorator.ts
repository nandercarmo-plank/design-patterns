import { Decorator } from "../interfaces/Decorator";
import { ILogger } from "../interfaces/ILogger";

export class TimestampDecorator extends Decorator {
	
	constructor(logger: ILogger) {
		super(logger);
	}
	
	log(message: string): void {
		this.logger.log(`${new Date().toISOString()} - ${message}`);
	}
}