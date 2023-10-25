import { IRunner, RunnerType } from "../../types/runner";
import { CompoundExpression } from "./impl/CompoundExpression";

class CompositePattern implements IRunner {
	private exprString: string;

	constructor(exprString: string) {
		this.exprString = exprString;
	}

	run() {
		
		const expr = new CompoundExpression(this.exprString);
		expr.build();
		console.log(`Expression: ${this.exprString}`);
		console.log(`Result: ${expr.calc()}`);

		return;
	}
}

export const CompositePatternTest: RunnerType = {
	tests: [
		{ name: "Should compute a basic sum", test: new CompositePattern("1 2 +") },
		{ name: "Should compute a basic subtraction", test: new CompositePattern("1 2 -") },
		{ name: "Should compute a basic multiplication", test: new CompositePattern("2 2 *") },
		{ name: "Should compute a basic division", test: new CompositePattern("5 10 /") },
		{ name: "Should compute a complex expression", test: new CompositePattern("1 2 + 3 4 - *") },
	],
	pattern: "CompositePattern",
	shouldRun: true
};
