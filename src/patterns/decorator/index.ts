import { IRunner, RunnerType } from "../../types/runner";
import { Logger } from "./impl/Logger";
import { TimestampDecorator } from "./impl/TimestampDecorator";
import { LevelDecorator } from "./impl/LevelDecorator";
import { ILogger } from "./interfaces/ILogger";

class DecoratorPattern implements IRunner {
	private decorators: ("timestamp" | "info" | "error")[];

	constructor(decorators: ("timestamp" | "info" | "error")[]) {
		this.decorators = decorators;
	}

	run() {

		let logger: ILogger = new Logger();

		this.decorators.forEach(decorator => {
			if (decorator === "timestamp") logger = new TimestampDecorator(logger);
			else if (decorator === "info") logger = new LevelDecorator(logger, "INFO");
			else if (decorator === "error") logger = new LevelDecorator(logger, "ERROR");
		});
		
		logger.log("Hello World!");

		return;
	}
}

export const DecoratorPatternTest: RunnerType = {
	tests: [
		{ name: "Should log using a simple logger", test: new DecoratorPattern([]) },
		{ name: "Should log using a info level decorator", test: new DecoratorPattern(["info"]) },
		{ name: "Should log using a error level decorator", test: new DecoratorPattern(["error"]) },
		{ name: "Should log using a timestamp decorator", test: new DecoratorPattern(["timestamp"]) },
		{ name: "Should log using a info and timestamp decorator", test: new DecoratorPattern(["info", "timestamp"]) },
		{ name: "Should log using a error and timestamp decorator", test: new DecoratorPattern(["error", "timestamp"]) },
		{ name: "Should log using a timestamp and info decorator", test: new DecoratorPattern(["timestamp", "info" ]) },
		{ name: "Should log using a timestamp and error decorator", test: new DecoratorPattern(["timestamp", "error"]) }
	],
	pattern: "Decorator",
	shouldRun: true
};
