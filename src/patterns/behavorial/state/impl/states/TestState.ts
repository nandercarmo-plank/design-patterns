import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";
import { ErrorState } from "./ErrorState";
import { SuccessState } from "./SuccessState";

export class TestState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("Running test step...");
		console.log("Running unity tests 'npm run test:unity'...");
		console.log("Running integration tests 'npm run test:integration'...");
		console.log("Running e2e tests 'npm run test:e2e'...");

		if(this.pipeSuccessParams.test) {
			console.log("Test step completed successfully!");
			this.context.updateState(new SuccessState(this.pipeSuccessParams, this.context));
		} else {
			console.log("Test step failed!");
			this.context.updateState(new ErrorState(this.pipeSuccessParams, this.context));
		}

		console.log("--------------------------------------------------");
	}
}