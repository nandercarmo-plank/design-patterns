import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";

export class ErrorState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("\x1b[31mDeployment failed!\x1b[0m");
		console.log("Reseting deployment...");
		console.log("Done!")
		
		this.context.updateState(undefined);
	}
}