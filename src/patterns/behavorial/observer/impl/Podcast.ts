import { Publisher } from "../interfaces/Publisher";
import { Subscriber } from "../interfaces/Subscriber";

export class Podcast implements Publisher {
	
	private subscribers	: Subscriber[];

	constructor() {
		this.subscribers = [];
	}

	subscribe(subscriber: Subscriber): void {
		this.subscribers.push(subscriber);
	}
	
	unsubscribe(subscriber: Subscriber): void {
		this.subscribers = this.subscribers.filter((s) => s !== subscriber);
	}
	
	notify(): void {
		if (this.subscribers.length === 0) {
			console.log("No subscribers to notify.");
			return;
		}
		this.subscribers.forEach((s) => s.update());
	}
}