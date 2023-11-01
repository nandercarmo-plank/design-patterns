import { IRunner, RunnerType } from "../../../types/runner";
import { PipeContext } from "./impl/PipeContext";
import { PipeSuccessParams } from "./interfaces/State";

type StatePatternParams = {
	pipeSuccessParams: PipeSuccessParams;
};

class StatePattern implements IRunner {

	private params: StatePatternParams;

	constructor(params: StatePatternParams) {
		this.params = params;
	}

	run() {
		const ciCdPipeline = new PipeContext(this.params.pipeSuccessParams);
		ciCdPipeline.run();
		return;
	}
}

export const StatePatternTest: RunnerType = {
	tests: [
		{
			name: "Should fail in the setup step",
			test: new StatePattern({ pipeSuccessParams: { setup: false, build: false, lint: false, test: false } }),
		},
		{
			name: "Should fail in the build step",
			test: new StatePattern({ pipeSuccessParams: { setup: true, build: false, lint: false, test: false } }),
		},
		{
			name: "Should fail in the lint step",
			test: new StatePattern({ pipeSuccessParams: { setup: true, build: true, lint: false, test: false } }),
		},
		{
			name: "Should fail in the test step",
			test: new StatePattern({ pipeSuccessParams: { setup: true, build: true, lint: true, test: false } }),
		},
		{
			name: "Should pass every step",
			test: new StatePattern({ pipeSuccessParams: { setup: true, build: true, lint: true, test: true } }),
		}
	],
	pattern: "State",
	shouldRun: true
};
