import { Context } from "../../interfaces/Context";
import { PipeSuccessParams, State } from "../../interfaces/State";

export class SuccessState extends State {

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		super(pipeSuccessParams, context);
	}

	handle() {
		console.log("\x1b[32mDeployment succeed!\x1b[0m");
		console.log("Access the app here: http://success.com!")
		
		this.context.updateState(undefined);
	}
}