export class JsonPrinter {

	private json: { message: string; timestamp: Date }[];

	constructor() {
		this.json = [];
	}

	log(text: string): void {
		this.json.push({ message: text, timestamp: new Date() });
	}

	print(): void {
		console.log(JSON.stringify(this.json));
	}
}