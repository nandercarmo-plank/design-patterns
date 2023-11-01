import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";
import { ErrorState } from "./ErrorState";
import { LintState } from "./LintState";

export class BuildState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("Running build step...");
		console.log("Building application 'npm run build'...");

		if(this.pipeSuccessParams.build) {
			console.log("Build step completed successfully!");
			this.context.updateState(new LintState(this.pipeSuccessParams, this.context));
		} else {
			console.log("Build step failed!");
			this.context.updateState(new ErrorState(this.pipeSuccessParams, this.context));
		}

		console.log("--------------------------------------------------");
	}
}