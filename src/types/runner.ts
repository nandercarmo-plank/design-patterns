export interface IRunner {
	run: () => void;
}

export type RunnerType = {
	tests: {
		name: string;
		test: IRunner;
	}[];
	pattern: string;
	shouldRun: boolean;
}