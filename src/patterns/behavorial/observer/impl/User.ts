import { Subscriber } from "../interfaces/Subscriber";

export class User implements Subscriber {
	
	private name: string;
	private subscribe: boolean;

	constructor(name: string, subscribe: boolean) {
		this.name = name;
		this.subscribe = subscribe;
	}
	
	update(): void {
		console.log(`User ${this.name} was notified.`);
	}

	wantsToSubscribe(): boolean {
		return this.subscribe;
	}
}