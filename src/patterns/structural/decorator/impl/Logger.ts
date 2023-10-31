import { ILogger } from "../interfaces/ILogger";

export class Logger implements ILogger {
	log(message: string) {
		console.log(message);
	}
}