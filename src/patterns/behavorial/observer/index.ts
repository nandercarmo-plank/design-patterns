import { IRunner, RunnerType } from "../../../types/runner";
import { Podcast } from "./impl/Podcast";
import { User } from "./impl/User";

type ObserverPatternParams = {
	name: string;
	subscribe: boolean;
}[];

class ObserverPattern implements IRunner {

	private params: ObserverPatternParams;

	constructor(params: ObserverPatternParams) {
		this.params = params;
	}

	run() {

		const podcast = new Podcast();
		const users = this.params.map((user) => new User(user.name, user.subscribe));

		users.forEach((user) => {
			if (user.wantsToSubscribe()) {
				podcast.subscribe(user);
			}
		});

		podcast.notify();

		return;
	}
}

export const ObserverPatternTest: RunnerType = {
	tests: [
		{
			name: "Should not subscribe anyone to a podcast",
			test: new ObserverPattern([
				{ name: "John", subscribe: false }, 
				{ name: "Mary", subscribe: false },
				{ name: "Peter", subscribe: false }
			]),
		},
		{
			name: "Should subscribe some people to a podcast",
			test: new ObserverPattern([
				{ name: "John", subscribe: true }, 
				{ name: "Mary", subscribe: false },
				{ name: "Peter", subscribe: true }
			]),
		},
		{ 
			name: "Should subscribe everyone to a podcast",
			test: new ObserverPattern([
				{ name: "John", subscribe: true }, 
				{ name: "Mary", subscribe: true },
				{ name: "Peter", subscribe: true }
			]),
		}
	],
	pattern: "Observer",
	shouldRun: true
};
