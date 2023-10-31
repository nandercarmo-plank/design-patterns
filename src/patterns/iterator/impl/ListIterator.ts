import { Iterator } from "../interfaces/Iterator";

export class ListIterator<T> implements Iterator<T> {
	private items: T[];
	private currentIndex: number;

	constructor(items: T[]) {
		this.items = items;
		this.currentIndex = 0;
	}
	
	next(): T {

		if (!this.hasNext()) {
			throw new Error("No more items to iterate over.");
		}

		return this.items[this.currentIndex++];
	}

	hasNext(): boolean {
		return this.currentIndex < this.items.length;
	}
}