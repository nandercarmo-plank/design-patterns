import { IRunner, RunnerType } from "../../../types/runner";
import { BurguerBuilder } from "./impl/BurguerBuilder";
import { BurguerDirector } from "./impl/BurguerDirector";
import { IBurguer } from "./interfaces/IBurguer";
import { BurguerOptions } from "./interfaces/IBurguerDirector";

class BuilderPattern implements IRunner {
	private burguerOption: BurguerOptions;

	constructor(burguerOption: BurguerOptions) {
		this.burguerOption = burguerOption;
	}

	run() {
		const builder = new BurguerBuilder();
		const director = new BurguerDirector(builder);
		const burguer = director.makeBurguer(this.burguerOption);

		if (!burguer) {
			console.log(
				"Burguer not supported! (supported burguers: Cheeseburguer, Double Cheeseburguer, Bacon Cheeseburguer, Double Bacon Cheeseburguer, Triple Bacon Cheeseburguer)"
			);
			return;
		}

		burguer.printIngredients();
		return;
	}
}

export const BuilderPatternTest: RunnerType = {
	tests: [
		{ name: "Should create a cheeseburguer", test: new BuilderPattern("Cheeseburguer") },
		{ name: "Should create a double cheeseburguer", test: new BuilderPattern("Double Cheeseburguer") },
		{ name: "Should create a bacon cheeseburguer", test: new BuilderPattern("Bacon Cheeseburguer") },
		{ name: "Should create a double bacon cheeseburguer", test: new BuilderPattern("Double Bacon Cheeseburguer") },
		{ name: "Should create a triple bacon cheeseburguer", test: new BuilderPattern("Triple Bacon Cheeseburguer") },
	],
	pattern: "Builder",
	shouldRun: true
};
