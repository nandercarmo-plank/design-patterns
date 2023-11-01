import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";
import { ErrorState } from "./ErrorState";
import { TestState } from "./TestState";

export class LintState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("Running lint step...");
		console.log("Linting code 'npm run lint'...");

		if(this.pipeSuccessParams.lint) {
			console.log("Lint step completed successfully!");
			this.context.updateState(new TestState(this.pipeSuccessParams, this.context));
		} else {
			console.log("Lint step failed!");
			this.context.updateState(new ErrorState(this.pipeSuccessParams, this.context));
		}

		console.log("--------------------------------------------------");
	}
}