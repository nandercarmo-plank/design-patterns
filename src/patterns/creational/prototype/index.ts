import { IRunner, RunnerType } from "../../types/runner";
import { Sheep } from './impl/Sheep';

class PrototypePattern implements IRunner {
	private sheepColor: "black" | "white" | "brown";

	constructor(sheepColor: "black" | "white" | "brown") {
		this.sheepColor = sheepColor;
	}

	run() {
		const sheepPrototype = new Sheep();
		sheepPrototype.setColor(this.sheepColor);
		sheepPrototype.setWeight(50);
		sheepPrototype.setName("Dolly");

		const clonedSheep = sheepPrototype.clone();

		console.log("Original sheep x Cloned sheep");
		console.log(`Name: ${sheepPrototype.getName()} x ${clonedSheep.getName()}`);
		console.log(`Weight: ${sheepPrototype.getWeight()} x ${clonedSheep.getWeight()}`);
		console.log(`Color: ${sheepPrototype.getColor()} x ${clonedSheep.getColor()}`);

		return;
	}
}

export const PrototypePatternTest: RunnerType = {
	tests: [
		{ name: "Should clone a black sheep", test: new PrototypePattern("black") },
		{ name: "Should clone a white sheep", test: new PrototypePattern("white") },
		{ name: "Should clone a brown sheep", test: new PrototypePattern("brown") }
	],
	pattern: "Prototype",
	shouldRun: true
};
