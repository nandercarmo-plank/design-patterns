import { IBoard } from "./IBoard";

export class ESP8266 implements IBoard {
	setup() {
		console.log("Setting up ESP8266 board");
	}
}
