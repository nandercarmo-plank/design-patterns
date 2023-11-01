import { Context } from "./Context";

export type PipeSuccessParams = {
	setup: boolean,
	build: boolean,
	lint: boolean,
	test: boolean,
}

export abstract class State {
	
	protected pipeSuccessParams: PipeSuccessParams;
	protected	context: Context;

	constructor(pipeSuccessParams: PipeSuccessParams, context: Context) {
		this.pipeSuccessParams = pipeSuccessParams;
		this.context = context;
	}
	
	abstract handle(): void;
}