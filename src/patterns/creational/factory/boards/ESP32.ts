import { IBoard } from "./IBoard";

export class ESP32 implements IBoard {
	setup() {
		console.log("Setting up ESP32 board");
	}
}
