import { PipeSuccessParams, State } from "../interfaces/State";
import { SetupState } from "../impl/states/SetupState";
import { Context } from "../interfaces/Context";

export class PipeContext implements Context {

	private currentState?: State;

	constructor(pipeSuccessParams: PipeSuccessParams) {
		this.currentState = new SetupState(pipeSuccessParams, this);
	}

	run() {
		console.log("Starting CI/CD pipeline...");
		while (this.currentState) {
			this.currentState.handle();
		}
	}

	updateState(state?: State | undefined): void {
		this.currentState = state;
	}
}