import { ConsolePrinter } from "./ConsolePrinter";

export class App {

	private logger: ConsolePrinter;

	constructor(logger: ConsolePrinter) {
		this.logger = logger;
	}

	run(): void {
		for (let i = 0; i < 5; i++) {
			this.logger.print(`Message ${i}`);
		}
	}
}