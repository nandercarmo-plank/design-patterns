import { IRunner, RunnerType } from "../../types/runner";
import { App } from "./impl/App";
import { ConsolePrinter } from "./impl/ConsolePrinter";
import { JsonPrinterAdapter } from "./impl/JsonPrinterAdapter";

class AdapterPattern implements IRunner {

	private logger: "console" | "json";

	constructor(logger: "console" | "json") {
		this.logger = logger;
	}

	run() {

		const consoleLogger = new ConsolePrinter();
		const jsonPrinter = new JsonPrinterAdapter();
		const consoleApp = new App(consoleLogger);
		const jsonApp = new App(jsonPrinter);

		if (this.logger === "json") {
			jsonApp.run();
			jsonPrinter.printJSON();
			return;
		}

		consoleApp.run();
	}
}

export const AdapterPatternTest: RunnerType = {
	tests: [
		{ name: "Should use console logger", test: new AdapterPattern("console") },
		{ name: "Should use json logger", test: new AdapterPattern("json") }
	],
	pattern: "Adapter",
	shouldRun: true
};
