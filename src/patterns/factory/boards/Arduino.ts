import { IBoard } from "./IBoard";

export class Arduino implements IBoard {
	setup() {
		console.log("Setting up Arduino board");
	}
}
