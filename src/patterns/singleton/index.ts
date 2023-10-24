import { IRunner, RunnerType } from "../../types/runner";
import { LoggerSingleton } from "./LoggerSingleton";

class SingletonPattern implements IRunner {
	private type: "log" | "error";

	constructor(type: "log" | "error") {
		this.type = type;
	}

	run() {

		const createdLogDate1 = LoggerSingleton.getInstance();
		const createdLogDate2 = LoggerSingleton.getInstance();
		const createdLogDate3 = LoggerSingleton.getInstance();

		if (this.type === "log") {
			createdLogDate1.log("This is a log message");
			createdLogDate2.log("This is a new log message");
			createdLogDate3.log("This is another log message");
		} else {
			createdLogDate1.error("This is an error message");
			createdLogDate2.error("This is a new error message");
			createdLogDate3.error("This is another error message");
		}

		if (createdLogDate1 === createdLogDate2 && createdLogDate2 === createdLogDate3) {
			createdLogDate1.log("All instances are the same");
		} else {
			createdLogDate1.error("All instances are not the same");
		}

		return;
	}
}

export const SingletonPatternTest: RunnerType = {
	tests: [
		{ name: "Should log using the same Logger instance", test: new SingletonPattern("log") },
		{ name: "Should log errors using the same Logger instance", test: new SingletonPattern("error") }
	],
	pattern: "SingletonPattern",
	shouldRun: true
};
