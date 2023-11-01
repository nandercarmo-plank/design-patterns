import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";
import { BuildState } from "./BuildState";
import { ErrorState } from "./ErrorState";

export class SetupState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("Running setup step...");
		console.log("Installing node and npm...");
		console.log("Installing dependencies 'npm install'...");

		if(this.pipeSuccessParams.setup) {
			console.log("Setup step completed successfully!");
			this.context.updateState(new BuildState(this.pipeSuccessParams, this.context));
		} else {
			console.log("Setup step failed!");
			this.context.updateState(new ErrorState(this.pipeSuccessParams, this.context));
		}

		console.log("--------------------------------------------------");
	}
}