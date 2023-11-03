import { IRunner, RunnerType } from "../../../types/runner";
import { Animal } from "./impl/Animal";
import { Plant } from "./impl/Plant";
import { PrintVisitor } from "./impl/PrintVisitor";

type VisitorPatternParams = {
	livingBeings: (Animal | Plant)[];
};

class VisitorPattern implements IRunner {

	private params: VisitorPatternParams;

	constructor(params: VisitorPatternParams) {
		this.params = params;
	}

	run() {
		const printVisitor = new PrintVisitor();

		this.params.livingBeings.forEach(livingBeing => {
			livingBeing.accept(printVisitor);
		});
	}
}

export const VisitorPatternTest: RunnerType = {
	tests: [
		{
			name: "Should visit all living beings",
			test: new VisitorPattern({
				livingBeings: [
					new Animal("Wolf", "Mammal", "Carnivore", "Male", 10),
					new Plant("Angiosperms", "medium", "Rose", true),
					new Animal("Parrot", "Bird", "Herbivore", "Female", 5),
					new Plant("Bryophytes", "small", "Moss", false),
				]
			}),
		},
	],
	pattern: "Visitor",
	shouldRun: true
};
