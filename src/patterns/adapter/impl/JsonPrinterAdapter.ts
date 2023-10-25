import { ConsolePrinter } from "./ConsolePrinter";
import { JsonPrinter } from "./JsonPrinter";

export class JsonPrinterAdapter extends ConsolePrinter {

	private jsonPrinter: JsonPrinter;

	constructor() {
		super();
		this.jsonPrinter = new JsonPrinter();
	}

	print(text: string): void {
		this.jsonPrinter.log(text);
	}

	printJSON(): void {
		this.jsonPrinter.print();
	}
} 