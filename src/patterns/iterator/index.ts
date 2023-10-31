import { IRunner, RunnerType } from "../../types/runner";
import { ListCollection, ListIteratorType } from "./impl/ListCollection";

type IteratorPatternParams = {
	list: any[];
	type: ListIteratorType;
};

class IteratorPattern implements IRunner {

	private params: IteratorPatternParams;

	constructor(params: IteratorPatternParams) {
		this.params = params;
	}

	run() {
		
		const collection = new ListCollection(this.params.list);
		const iterator = collection.createIterator(this.params.type);

		while (iterator.hasNext()) {
			console.log("List element: ", iterator.next());
		}

		return;
	}
}

export const IteratorPatternTest: RunnerType = {
	tests: [
		{ 
			name: "Should normal iterate a number list",
			test: new IteratorPattern({ list: [1, 2, 3], type: "normal" }),
		},
		{ 
			name: "Should reversed iterate a number list",
			test: new IteratorPattern({ list: [1, 2, 3], type: "reversed" }),
		},
		{ 
			name: "Should normal iterate a string list",
			test: new IteratorPattern({ list: ["a", "b", "c"], type: "normal" }),
		},
		{ 
			name: "Should reversed iterate a string list",
			test: new IteratorPattern({ list: ["a", "b", "c"], type: "reversed" }),
		},
	],
	pattern: "Iterator",
	shouldRun: true
};
